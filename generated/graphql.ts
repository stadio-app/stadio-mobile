/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Time: any;
};

export type Auth = {
  __typename?: 'Auth';
  token: Scalars['String'];
  user: User;
};

export type Hello = {
  __typename?: 'Hello';
  message: Scalars['String'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  sayHello: Hello;
  signInGoogle: Auth;
};


export type QuerySayHelloArgs = {
  message?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  showMessage?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySignInGoogleArgs = {
  accessToken: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  active?: Maybe<Scalars['Boolean']>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['Time']>;
  createdAt: Scalars['Time'];
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Time'];
};
