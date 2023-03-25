import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: 'localhost:8080/graphql',
  cache: new InMemoryCache(),
});
