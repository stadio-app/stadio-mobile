import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: process.env.EXPO_PUBLIC_API_GQL_URL ?? 'http://localhost:8080/graphql',
  cache: new InMemoryCache(),
});
