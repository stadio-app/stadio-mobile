import React, { useState } from 'react';
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
import { AuthContext } from '../../store/AuthStore';
import { ApolloError } from '@apollo/client';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export function LoginScreen({ navigation }: Props) {
  const [error, setError] = useState<ApolloError>();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginInternal } = React.useContext(AuthContext);

  const handleLogin = () => {
    setLoading(true);
    loginInternal({ email, password })
      .then(() => {
        navigation.navigate('MainMenu');
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
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
