import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screens from './screens/screens';

export type RootStackParamList = {
  Welcome: undefined;
  Explore: undefined;
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={Screens.LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='Welcome'
          component={Screens.WelcomeScreen}
          options={{
            title: 'Welcome',
            // headerShown: false,
          }}
        />
        <Stack.Screen
          name='Explore'
          component={Screens.ExploreScreen}
          options={{
            title: 'Explore',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
