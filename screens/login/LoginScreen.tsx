import React, { useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Platform,
  View,
  Image,
  StyleSheet,
  TextInput,
  Button,
  SafeAreaView,
  Text,
} from 'react-native';
import { RootStackParamList } from '../../types/RootStackParamList';
import { useLazyQuery } from '@apollo/client';
import { setItemAsync } from 'expo-secure-store';
import { gql } from '../../generated/gql';

const LOGIN_QUERY = gql(`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
        email
        avatar
        createdAt
        updatedAt
        active
        authPlatform
        authStateId
      }
    }
  }
`);

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;
export const JWT_KEY = 'JWT';

export function LoginScreen({ navigation }: Props) {
  const [login, { loading, error, data }] = useLazyQuery(LOGIN_QUERY);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    login({
      variables: {
        email,
        password,
      },
    }).then(({ data, error, loading }) => {
      if (error || !data) return;

      const { token, user } = data.login;
      setItemAsync(JWT_KEY, token);
      navigation.navigate('MainMenu');
    });
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#10454f', height: '100%' }}>
      <View style={{ ...styles.container, paddingHorizontal: 30 }}>
        <Image
          source={require('../../assets/logo-base.png')}
          style={styles.logo}
        ></Image>

        <View style={{ gap: 20, width: '100%' }}>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            placeholder="Email"
            autoCapitalize="none"
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCorrect={true}
            autoComplete="email"
            editable={!loading}
          />

          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            placeholder="Password"
            textContentType="password"
            autoCapitalize="none"
            secureTextEntry={true}
            autoCorrect={false}
            autoComplete="password"
            editable={!loading}
          />

          <View style={{ height: 20, justifyContent: 'center' }}>
            {error ? (
              <Text style={{ color: '#fff', opacity: 0.5 }}>
                {error.message}
              </Text>
            ) : (
              <></>
            )}
          </View>

          <View
            style={{
              backgroundColor: '#00343e',
              borderRadius: 5,
              height: 50,
              justifyContent: 'center',
            }}
          >
            <Button
              color={Platform.OS === 'android' ? '#00343e' : '#fff'}
              title={loading ? 'Logging in' : 'Login'}
              onPress={handleLogin}
              disabled={loading}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#10454f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    resizeMode: 'contain',
    height: '50%',
    width: '50%',
  },
  input: {
    height: 50,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  appleButton: {
    height: 50,
    width: 250,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleButton: {
    height: 50,
    width: 250,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    backgroundColor: '#333',
    color: '#fff',
  },
});
