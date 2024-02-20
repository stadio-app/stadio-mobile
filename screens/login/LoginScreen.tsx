import FontAwesome from '@expo/vector-icons/FontAwesome';

import React, { useEffect } from 'react';
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

      <View style={{ gap: 20 }}>
        {Platform.OS == 'ios' && (
          <FontAwesome.Button
            backgroundColor="#fff"
            color="#000"
            name="apple"
            style={styles.appleButton}
            onPress={() => navigation.navigate('MainMenu')}
          >
            Sign in with Apple
          </FontAwesome.Button>
        )}

        <FontAwesome.Button
          name="google"
          backgroundColor="#4285F4"
          style={styles.googleButton}
          onPress={() => {}}
        >
          Sign in with Google
        </FontAwesome.Button>
      </View>
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
});
