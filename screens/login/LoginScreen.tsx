import * as AppleAuthentication from 'expo-apple-authentication';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Platform, View, Image, StyleSheet } from 'react-native';

import { RootStackParamList } from '../../types/RootStackParamList';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export function LoginScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo-base.png')}
        style={styles.logo}
      ></Image>

      {Platform.OS == 'ios' && (
        <AppleAuthentication.AppleAuthenticationButton
          buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
          buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.WHITE}
          cornerRadius={5}
          style={styles.appleButton}
          onPress={() => navigation.navigate('MainMenu')}
        />
      )}

      <FontAwesome.Button
        name='google'
        backgroundColor='#4285F4'
        style={styles.googleButton}
        onPress={() => navigation.navigate('MainMenu')}
      >
        Sign in with Google
      </FontAwesome.Button>

      {/* TODO: Use the actual GoogleSignInButton when integrating authentication */}
      {/* <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => {}}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10454f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    resizeMode: 'contain',
    height: '50%',
    width: '50%',
  },
  appleButton: {
    height: 50,
    width: 250,
    marginBottom: 10,
  },
  googleButton: {
    height: 50,
    width: 250,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
