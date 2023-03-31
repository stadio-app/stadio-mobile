import * as Google from "expo-auth-session/providers/google";
import { Platform } from 'react-native';

const iosClientId = "282945859510-u2crevt3732d9lfse1du6t4ko7b72r63.apps.googleusercontent.com"
const androidClientId = "282945859510-fpaevk5e5fmig1du93sr90nludar0cbf.apps.googleusercontent.com"

export const googleOAuth = () => Google.useAuthRequest({
  iosClientId,
  androidClientId,
  webClientId: "282945859510-om0tr21kahhbr65tnp9n3huqih4mlmob.apps.googleusercontent.com",
  expoClientId: Platform.OS === 'android' ? androidClientId : iosClientId,
  scopes: ['profile', 'email'],
});
