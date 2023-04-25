import { HttpLink, ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloLink, concat } from "apollo-link";
// Setup Apollo client.
const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      "X-TENSOR-API-KEY": "ce75115e-6cfb-470e-8f7c-dfdf286a3da5",
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
