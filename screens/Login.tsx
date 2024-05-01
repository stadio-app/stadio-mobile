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
import { RootStackParamList } from '../types/RootStackParamList';
import { AuthContext } from '../store/AuthStore';
import { ApolloError } from '@apollo/client';
import * as Google from 'expo-auth-session/providers/google';
import { AppOwnership } from 'expo-constants';
import NativeConstants from 'expo-constants';
import { makeRedirectUri } from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import { SocialIcon } from '@rneui/themed';
import { Divider, ListItem } from '@rneui/base';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;
type GoogleUser = {
  email: string;
  name: string;
};

// const GOOGLE_CONFIG: Partial<Google.GoogleAuthRequestConfig> =

//expo go 282945859510-qtn9udln341k9qo4gdjbnj2ugmfvqn3q.apps.googleusercontent.com

const EXPO_REDIRECT_PARAMS = {
  // useProxy: true,
  // projectNameForProxy: `@stadio/stadiomobile`
  scheme: 'stadiomobile',
};

const NATIVE_REDIRECT_PARAMS = { native: 'stadiomobile://' };
const REDIRECT_PARAMS =
  NativeConstants.appOwnership === AppOwnership.Expo
    ? EXPO_REDIRECT_PARAMS
    : NATIVE_REDIRECT_PARAMS;

WebBrowser.maybeCompleteAuthSession();

export function LoginScreen({ navigation }: Props) {
  const [createAccount, setCreateAccount] = useState(false);
  const [error, setError] = useState<ApolloError>();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginInternal, createUserHandler, loginGoogle } =
    React.useContext(AuthContext);

  const resetState = () => {
    setName('');
    setEmail('');
    setPassword('');
    setLoading(false);
    setCreateAccount(false);
  };

  const [_, response, promptAsync] = Google.useAuthRequest({
    expoClientId: process.env.EXPO_PUBLIC_GOOGLE_EXPO_CLIENT_ID,
    androidClientId: process.env.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID,
    iosClientId: process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID,
    webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
  });

  useEffect(() => {
    handleGoogleLogin();
  }, [response]);

  const handleLogin = () => {
    setLoading(true);
    loginInternal({ email, password })
      .then((newAuthState) => {
        navigation.navigate(
          newAuthState.user?.active ? 'MainMenu' : 'EmailVerification'
        );
      })
      .catch((error) => {
        setError(error);
        alert(error);
      })
      .finally(() => resetState());
  };

  const handleGoogleLogin = async () => {
    const token = response?.authentication.accessToken;
    console.log(token);
    if (token) {
      loginGoogle(token)
        .then((newAuthState) => {
          navigation.navigate(
            newAuthState.user?.active ? 'MainMenu' : 'EmailVerification'
          );
        })
        .catch((error) => {
          setError(error);
          alert(error);
        })
        .finally(() => resetState());
    }
  };

  const handleSignup = () => {
    setLoading(true);
    createUserHandler({ email, name, password })
      .then(() => {
        alert('Account created successfully!');
        navigation.navigate('EmailVerification');
      })
      .catch((error) => {
        setError(error);
        alert(error);
      })
      .finally(() => resetState());
  };

  const handleCreateAccountClick = () => {
    setCreateAccount(!createAccount);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#10454f', height: '100%' }}>
      <View
        style={{
          ...styles.container,
          paddingHorizontal: 30,
          paddingTop: 70,
          gap: 20,
        }}
      >
        <Text style={{ fontSize: 50, color: 'white', alignSelf: 'flex-start' }}>
          Welcome to
        </Text>
        <Image
          source={require('../assets/logo-base.png')}
          style={styles.logo}
        ></Image>

        <View style={{ gap: 20, width: '100%' }}>
          {createAccount && (
            <TextInput
              style={styles.input}
              onChangeText={setName}
              value={name}
              placeholder="Name"
              autoCapitalize="words"
              textContentType="none"
              autoCorrect={true}
              autoComplete="name"
              editable={!loading}
            />
          )}

          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
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
            value={password}
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
              borderRadius: 25,
              height: 50,
              justifyContent: 'center',
            }}
          >
            <Button
              color={Platform.OS === 'android' ? '#00343e' : '#fff'}
              title={
                createAccount
                  ? loading
                    ? 'Signing up'
                    : 'Sign up'
                  : loading
                    ? 'Logging in'
                    : 'Login'
              }
              onPress={createAccount ? handleSignup : handleLogin}
              disabled={loading}
            />
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              marginLeft: -15,
            }}
          >
            <SocialIcon
              type="google"
              iconType="ant-design"
              button
              light
              onPress={() => promptAsync()}
            />
            <SocialIcon type="apple" button light />
          </View>

          <Divider />

          <Text
            style={{ color: 'white', alignSelf: 'center' }}
            onPress={() => handleCreateAccountClick()}
          >
            {!createAccount
              ? "Don't have an account? Register"
              : 'Already have an account? Login'}
          </Text>
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
    height: '15%',
    width: '60%',
    alignSelf: 'flex-start',
    marginTop: -20,
    marginBottom: 10,
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
