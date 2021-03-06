import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Input from "../../Components/Input";
import Heading from "../../Components/ContentsTitle"
import Button from "../../Components/Button";

const Wrapper = styled.div`
  //min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width:350px; 

`;

const Box = styled.div`
  ${props => props.theme.whiteBox}
  border-radius:0px;
  width: 100%;
  max-width: 350px;
`;

const StateChanger = styled(Box)`
  text-align: center;
  padding: 20px 0px;
`;

const Link = styled.span`
  color: ${props => props.theme.blueColor};
  cursor: pointer;
`;
const TitleBox=styled.div`
border-top:3px solid #ccc
border-bottom:3px solid #f44336
padding:10px;
`;
const Title=styled.h1`
  text-align:center;
  font-size:22px;
`;
const Form = styled(Box)`
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  form {
    width: 100%;
    input {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 7px;
      }
    }
    button {
      margin-top: 10px;
    }
  }
`;

export default ({
  action,
  username,
  firstName,
  lastName,
  email,  
  password,
  setAction,
  onSubmit,
  secret,
  phone
}) => (
  <Wrapper>
    <Form> 
      {action === "logIn" && (
        <>
          <Helmet>
            <title>Log In | POMS - Parking Operation Management Software</title>
         </Helmet>
          <form onSubmit={onSubmit}>
            <Heading value="관리자 로그인"/>
            <Input placeholder={"Email"} {...email} type="email" />
            <Input placeholder={"Password"} {...password} type="password" />
            <Button text={"Log in"} />
          </form>
        </>
      )}
      {action === "signUp" && (
        <>
          <Helmet>
            <title>Sign Up | Prismagram</title>
          </Helmet>
          <form onSubmit={onSubmit}>
            <Input placeholder={"Username"} {...username} />
            <Input placeholder={"Email"} {...email} type="email" />
            <Input placeholder={"Password"} {...password} type="password" />
            <Input placeholder={"Phone"} {...phone} />
            <Button text={"Sign up"} />
          </form>
        </>
      )}
      {action === "confirm" && (
        <>
          <Helmet>
            <title>Confirm Secret | Prismagram</title>
          </Helmet>
          <form onSubmit={onSubmit}>
            <Input placeholder="Paste your secret" required {...secret} />
            <Button text={"Confirm"} />
          </form>
        </>
      )}
    </Form>

    {action !== "confirm" && (
      <StateChanger>
        {action === "logIn" ? (
          <>
            Don't have an account?{" "}
            <Link onClick={() => setAction("signUp")}>Sign up</Link>
          </>
        ) : (
          <>
            Have an account?{" "}
            <Link onClick={() => setAction("logIn")}>Log in</Link>
          </>
        )}
      </StateChanger>
    )}
  </Wrapper>
);
