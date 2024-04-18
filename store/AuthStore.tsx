import { ReactNode, createContext, useState } from 'react';
import { Auth, QueryLoginArgs, User } from '../generated/graphql';
import * as SecureStore from 'expo-secure-store';
import { useLazyQuery } from '@apollo/client';
import { gql } from '../generated';

export const JWT_KEY = 'JWT';
export type AuthState = {
  isLoggedIn: boolean;
  token?: string;
  user?: User;
};
export type AuthContextType = {
  authState: AuthState;
  loginInternal: (params: QueryLoginArgs) => Promise<AuthState>;
  logout: () => void;
  verifyWithSecureStoreJwt: () => Promise<AuthState>;
};
const initialAuthState: AuthState = {
  isLoggedIn: false,
} as const;

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

const ME_QUERY = gql(`
  query Me {
    me {
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
`);

const GOOGLE_OAUTH_QUERY = gql(`
  query GoogleOauth($accessToken: String!) {
    googleOAuth(accessToken: $accessToken) {
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
      isNewUser
    }
  }
`);

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

const AuthStore = ({ children }: { children: ReactNode }) => {
  const [login] = useLazyQuery(LOGIN_QUERY);
  const [me] = useLazyQuery(ME_QUERY);
  const [googleOAuth] = useLazyQuery(GOOGLE_OAUTH_QUERY);
  const [authState, setAuthState] = useState({
    ...initialAuthState,
  });

  const initiateLogin = async (token: string, user: User) => {
    const newAuthState = {
      isLoggedIn: true,
      token,
      user,
    } as AuthState;
    setAuthState({ ...newAuthState });
    await SecureStore.setItemAsync(JWT_KEY, token);
    return newAuthState;
  };

  const loginInternal = async (loginArgs: QueryLoginArgs) => {
    const { data, error } = await login({ variables: loginArgs });
    if (error || !data) throw error;

    return await initiateLogin(data.login.token, data.login.user);
  };

  const loginGoogle = async (accessToken: string) => {
    const { data, error } = await googleOAuth({ variables: { accessToken } });
    if (error || !data) throw error;

    return await initiateLogin(data.googleOAuth.token, data.googleOAuth.user);
  };

  const logout = () => {
    SecureStore.deleteItemAsync(JWT_KEY);
    setAuthState({ ...initialAuthState });
  };

  const verifyWithSecureStoreJwt = async () => {
    const jwt = await SecureStore.getItemAsync(JWT_KEY);
    if (!jwt || jwt === null) throw new Error('JWT not found');

    const { data, error } = await me({
      context: { headers: { authorization: `Bearer ${jwt}` } },
    });
    if (error || !data) {
      SecureStore.deleteItemAsync(JWT_KEY);
      throw error;
    }

    const newAuthState = {
      isLoggedIn: true,
      token: jwt,
      user: data.me,
    };
    setAuthState({ ...newAuthState });
    return newAuthState;
  };

  return (
    <AuthContext.Provider
      value={{ authState, loginInternal, logout, verifyWithSecureStoreJwt }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthStore;
