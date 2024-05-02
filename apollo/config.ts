import { ApolloClient, InMemoryCache } from '@apollo/client';
import { resolveApiUrl } from '../utils/UrlUtils';

export const apolloClient = new ApolloClient({
  uri: `${resolveApiUrl()}/graphql`,
  cache: new InMemoryCache(),
});
