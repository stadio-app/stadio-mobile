import React from 'react';
import { ApolloProvider } from '@apollo/client';
import AppEntry from './screens/AppEntry';
import { apolloClient } from './apollo/config';

const domain = 'stadio.us.auth0.com';
const clientId = 'b1J9xfZSFE1MUJU9iyYtHCXWcJNGk39M';

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <AppEntry />
    </ApolloProvider>
  );
}
