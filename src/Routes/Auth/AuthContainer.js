import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import {
  LOG_IN,
  CREATE_ACCOUNT,
  CONFIRM_SECRET,
  LOCAL_LOG_IN,
  CHECK_PASSWORD
} from "./AuthQueries";
import { toast } from "react-toastify";

export default () => {
  const [action, setAction] = useState("logIn");
  const username = useInput("");
  const phone = useInput("");
  const secret = useInput("");
  const email = useInput("");
  const password=useInput("");
  const [requestSecretMutation] = useMutation(LOG_IN,
/*    {update:(_,{data}) =>{
      const{requestSecret}=data;
      if(!requestSecret){
        toast.error("You dont have an account yet, create one");
        setTimeout(()=>setAction("signUp"),3000);
      }
    }},*/ {variables: { email: email.value }
  });
  const [requestCheckPasswordMutation] = useMutation(CHECK_PASSWORD, {
    variables: {
      email: email.value,
      password: password.value
    }
  });
 
  const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
    variables: {
      username: username.value,
      email: email.value,
      phone: phone.value,
      password:password.value
    }
  });
  const [confirmSecretMutation] = useMutation(CONFIRM_SECRET, {
    variables: {
      email: email.value,
      secret: secret.value
    }
  });
  const [localLogInMutation] = useMutation(LOCAL_LOG_IN);

  const onSubmit = async e => {
    e.preventDefault();
    if (action === "logIn") {
      if (email.value !== "" && password.value !="") {
        try {
          const {
            data: { requestCheckPassword:token }
          } = await requestCheckPasswordMutation();//이메일과 비번이 맞으면 토큰을 리턴받는다
          if (token !== "" && token !== undefined) { 
            localLogInMutation({ variables: { token } });
          } else {
            throw Error();
          }
        } catch {
          toast.error("Cant confirm password,check again");
        }
      } else {
        toast.error("Email is required");
      }
    } else if (action === "signUp") {
      if (
        email.value !== "" &&
        username.value !== "" &&
        phone.value !== "" 
      ) {
        try {
          const {
            data: { createAccount }
          } = await createAccountMutation();
          if (!createAccount) {
            toast.error("Can't create account");
          } else {
            toast.success("Account created! Log In now");
            setTimeout(() => setAction("logIn"), 3000);
          }
        } catch (e) {
          toast.error(e.message);
        }
      } else {
        debugger
        toast.error("All field are required");
      }
    } else if (action === "confirm") {
      if (secret.value !== "") {
        try {
          const {
            data: { confirmSecret: token }
          } = await confirmSecretMutation();
          if (token !== "" && token !== undefined) {
            localLogInMutation({ variables: { token } });
          } else {
            throw Error();
          }
        } catch {
          toast.error("Cant confirm secret,check again");
        }
      }
    }
  };

  return (
    <AuthPresenter
      setAction={setAction}
      action={action}
      username={username}
      email={email}
      password={password}
      phone={phone}
      secret={secret}
      onSubmit={onSubmit}
    />
  );
};
