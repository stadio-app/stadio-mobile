import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'localhost:8080/graphql',
  cache: new InMemoryCache(),
});

import { RootStackParamList } from './types/RootStackParamList';
import * as Screens from './screens/screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Screens.LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MainMenu"
            component={Screens.MainMenu}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
