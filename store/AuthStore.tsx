import { ReactNode, createContext, useState } from 'react';
import { Auth, QueryLoginArgs, User } from '../generated/graphql';
import * as SecureStore from 'expo-secure-store';
import { gql } from '../generated/gql';
import { useLazyQuery } from '@apollo/client';

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

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

const AuthStore = ({ children }: { children: ReactNode }) => {
  const [login] = useLazyQuery(LOGIN_QUERY);
  const [me] = useLazyQuery(ME_QUERY);
  const [authState, setAuthState] = useState({
    ...initialAuthState,
  });

  const loginInternal = async (loginArgs: QueryLoginArgs) => {
    const { data, error } = await login({ variables: loginArgs });
    if (error || !data) throw error;

    const newAuthState = {
      isLoggedIn: true,
      token: data.login.token,
      user: data.login.user,
    } as AuthState;
    setAuthState({ ...newAuthState });
    await SecureStore.setItemAsync(JWT_KEY, data.login.token);
    return newAuthState;
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
