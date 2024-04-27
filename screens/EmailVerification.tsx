import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Platform,
  View,
  StyleSheet,
  TextInput,
  Button,
  SafeAreaView,
  Text,
} from 'react-native';
import { RootStackParamList } from '../types/RootStackParamList';
import { AuthContext } from '../store/AuthStore';
import { ApolloError } from '@apollo/client';

type Props = NativeStackScreenProps<RootStackParamList, 'EmailVerification'>;

export function EmailVerification({ navigation }: Props) {
  const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState<ApolloError>();
  const [loading, setLoading] = useState(false);
  const { authState, verifyEmailHandler, resendVerificationCodeHandler, logout } = React.useContext(AuthContext);

  const verifyCode = () => {
    setLoading(true);
    verifyEmailHandler(verificationCode)
      .then(() => {
        navigation.navigate('MainMenu');
      })
      .catch((error) => {
        setError(error);
        alert(error);
      })
      .finally(() => setLoading(false));
  };

  const resendVerificationCode = () => {
    setLoading(true);
    const email = authState.user?.email;
    if (!email) {
      logout();
      return;
    }
    resendVerificationCodeHandler((email))
    .catch((error) => {
      setError(error);
    })
    .finally(() => setLoading(false));
  }

  return (
    <SafeAreaView style={{ backgroundColor: '#10454f', height: '100%' }}>
      <View
        style={{ ...styles.container, paddingHorizontal: 30, paddingTop: 200 }}
      >
        <View style={{ gap: 40, width: '100%', justifyContent: 'center' }}>
          <Text
            style={{
              fontSize: 25,
              width: '70%',
              alignSelf: 'center',
              color: 'white',
            }}
          >
            Enter the verification code you received in your email
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={setVerificationCode}
            placeholder="Verification Code"
            autoCapitalize="words"
            textContentType="none"
            editable={!loading}
          />
          {error && (
            <View style={{ height: 20, justifyContent: 'center', alignSelf: 'center' }}>
              <Text style={{ color: '#fff', opacity: 0.5 }}>
                {error.message}
              </Text>
            </View>
          )}
          <View
            style={{
              backgroundColor: '#00343e',
              borderRadius: 5,
              height: 50,
              justifyContent: 'center',
              width: '60%',
              alignSelf: 'center',
            }}
          >
            <Button
              color={Platform.OS === 'android' ? '#00343e' : '#fff'}
              title={'Verify Code'}
              onPress={() => verifyCode()}
              disabled={loading}
            />

          </View>
          <View
            style={{
              backgroundColor: '#00343e',
              borderRadius: 5,
              height: 50,
              justifyContent: 'center',
              width: '60%',
              alignSelf: 'center',
              marginTop: -25
            }}
          >
            <Button
              color={Platform.OS === 'android' ? '#00343e' : '#fff'}
              title={'Resend Verification Code'}
              onPress={() => resendVerificationCode()}
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
  input: {
    height: 50,
    width: '70%',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
