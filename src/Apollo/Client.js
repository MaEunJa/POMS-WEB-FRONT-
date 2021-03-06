import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";
export default new ApolloClient({
  uri:
    process.env.NODE_ENV === "development"
      ? "https://poms-test-backend.herokuapp.com"//"http://localhost:4000"
      : "https://poms-test-backend.herokuapp.com",
  clientState: {
    defaults,
    resolvers
  },
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
});
