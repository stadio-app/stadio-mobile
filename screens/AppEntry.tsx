import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/RootStackParamList';
import * as Screens from './screens';
import { AuthContext } from '../store/AuthStore';
import { View, Image } from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppEntry() {
  const [loading, setLoading] = useState(true);
  const { authState, verifyWithSecureStoreJwt } = useContext(AuthContext);

  useEffect(() => {
    verifyWithSecureStoreJwt()
      .then(({ user }) => {
        console.log(`logged in as ${user?.name} (${user?.email})`);
      })
      .catch((err) => {
        console.log('user is not authenticated');
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View
        style={{
          backgroundColor: '#10454f',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          source={require('../assets/logo-base.png')}
          style={{
            resizeMode: 'contain',
            height: '50%',
            width: '50%',
          }}
        ></Image>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={
          authState.isLoggedIn
            ? authState.user?.active
              ? 'MainMenu'
              : 'EmailVerification'
            : 'Login'
        }
      >
        <Stack.Screen
          name="MainMenu"
          component={Screens.MainMenu}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Screens.LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="EmailVerification"
          component={Screens.EmailVerification}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
