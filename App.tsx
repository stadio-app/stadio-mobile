import React from 'react';
import { ApolloProvider } from '@apollo/client';
import AppEntry from './screens/AppEntry';
import { apolloClient } from './apollo/config';

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <AppEntry />
    </ApolloProvider>
  );
}
