import { ReactNode, createContext, useState } from 'react';
import { Auth, CreateAccountInput, QueryLoginArgs, User } from '../generated/graphql';
import * as SecureStore from 'expo-secure-store';
import { useLazyQuery, useMutation } from '@apollo/client';
import { gql } from '../generated';

export const JWT_KEY = 'JWT';
export type AuthState = {
  isLoggedIn: boolean;
  token?: string;
  user?: User;
};
export type AuthContextType = {
  authState: AuthState;
  createUserHandler: (params: CreateAccountInput) => Promise<void>;
  loginInternal: (params: QueryLoginArgs) => Promise<AuthState>;
  logout: () => void;
  verifyWithSecureStoreJwt: () => Promise<AuthState>;
};
const initialAuthState: AuthState = {
  isLoggedIn: false,
} as const;

const CREATE_USER_QUERY = gql(`
  mutation CreateAccount($email: String!, $name: String!, $password: String!) {
    createAccount(input:{
      email: $email,
      name: $name,
      password: $password
    }) {
      id
      name
      email
      phoneNumber
      createdAt
      updatedAt
      authPlatform
    }
  }
`);

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
  const [createUser] = useMutation(CREATE_USER_QUERY);
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

  const createUserHandler = async (createUserInput: CreateAccountInput) => {
    const { data } = await createUser({ variables: createUserInput });
    if (!data) throw 'Error creating new account';
  }

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
      value={{ authState,  createUserHandler, loginInternal, logout, verifyWithSecureStoreJwt }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthStore;
