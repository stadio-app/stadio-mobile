import React from 'react';
import { ApolloProvider } from '@apollo/client';
import AppEntry from './screens/AppEntry';
import { apolloClient } from './apollo/config';
import AuthStore from './store/AuthStore';

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <AuthStore>
        <AppEntry />
      </AuthStore>
    </ApolloProvider>
  );
}
