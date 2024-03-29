import { HttpLink, ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloLink, concat } from "apollo-link";
// Setup Apollo client.
const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
      "X-TENSOR-API-KEY": process.env.TENSOR_API_KEY,
      mode: "no-cors",
    },
  });
  return forward(operation);
});
const httpLink = new HttpLink({ uri: "https://api.tensor.so/graphql", fetch });
const client = new ApolloClient({
  // @ts-ignore
  link: concat(authLink, httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: "no-cache",
    },
    watchQuery: {
      fetchPolicy: "no-cache",
      nextFetchPolicy: "no-cache",
    },
  },
});

export default client;
