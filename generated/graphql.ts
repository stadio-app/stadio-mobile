/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
  /**
   * Define a Relay Cursor type:
   * https://relay.dev/graphql/connections.htm#sec-Cursor
   */
  Cursor: any;
  Time: any;
};

export type Address = Node & {
  __typename?: 'Address';
  createdAt: Scalars['Time'];
  fullAddress: Scalars['String'];
  id: Scalars['ID'];
  latitude: Scalars['Float'];
  location: Location;
  longitude: Scalars['Float'];
  mapsLink: Scalars['String'];
  updatedAt: Scalars['Time'];
};

export type AuthState = {
  __typename?: 'AuthState';
  token: Scalars['String'];
  user: User;
};

export type Event = Node & {
  __typename?: 'Event';
  createdAt: Scalars['Time'];
  endDate: Scalars['Time'];
  id: Scalars['ID'];
  location?: Maybe<Location>;
  name: Scalars['String'];
  participants?: Maybe<Array<Participant>>;
  startDate: Scalars['Time'];
  type?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Time'];
};

export type Location = Node & {
  __typename?: 'Location';
  address?: Maybe<Address>;
  createdAt: Scalars['Time'];
  events?: Maybe<Array<Event>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  owner?: Maybe<Owner>;
  reviews?: Maybe<Array<Review>>;
  type: Scalars['String'];
  updatedAt: Scalars['Time'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createOwner: Owner;
};


export type MutationCreateOwnerArgs = {
  input: OwnerInput;
};

/**
 * An object with an ID.
 * Follows the [Relay Global Object Identification Specification](https://relay.dev/graphql/objectidentification.htm)
 */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
};

/** Possible directions in which to order a list of items when provided an `orderBy` argument. */
export enum OrderDirection {
  /** Specifies an ascending order for a given `orderBy` argument. */
  Asc = 'ASC',
  /** Specifies a descending order for a given `orderBy` argument. */
  Desc = 'DESC'
}

export type Owner = Node & {
  __typename?: 'Owner';
  createdAt: Scalars['Time'];
  firstName: Scalars['String'];
  fullName: Scalars['String'];
  id: Scalars['ID'];
  idURL: Scalars['String'];
  lastName: Scalars['String'];
  locations?: Maybe<Array<Location>>;
  middleName?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Time'];
  user: User;
  verified: Scalars['Boolean'];
};

export type OwnerInput = {
  firstName: Scalars['String'];
  idURL: Scalars['String'];
  lastName: Scalars['String'];
  middleName?: InputMaybe<Scalars['String']>;
};

/**
 * Information about pagination in a connection.
 * https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo
 */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
};

export type Participant = Node & {
  __typename?: 'Participant';
  admin: Scalars['Boolean'];
  createdAt: Scalars['Time'];
  event?: Maybe<Event>;
  id: Scalars['ID'];
  nickname?: Maybe<Scalars['String']>;
  participates: Scalars['Boolean'];
  reviews?: Maybe<Array<Review>>;
  skillLevel?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Time'];
  user?: Maybe<User>;
};

export type Query = {
  __typename?: 'Query';
  /** Fetches an object given its ID. */
  node?: Maybe<Node>;
  /** Lookup nodes by a list of IDs. */
  nodes: Array<Maybe<Node>>;
  user: User;
  users: Array<User>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryNodesArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type Review = Node & {
  __typename?: 'Review';
  createdAt: Scalars['Time'];
  id: Scalars['ID'];
  location?: Maybe<Location>;
  message: Scalars['String'];
  participant?: Maybe<Participant>;
  rating: Scalars['Float'];
  updatedAt: Scalars['Time'];
};

export type User = Node & {
  __typename?: 'User';
  active: Scalars['Boolean'];
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['Time']>;
  createdAt: Scalars['Time'];
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  owner?: Maybe<Owner>;
  participants?: Maybe<Array<Participant>>;
  phoneNumber?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Time'];
};

export type UserInput = {
  avatarUrl?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  name: Scalars['String'];
};

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, email: string, phoneNumber?: string | null, name: string, avatar?: string | null, active: boolean, owner?: { __typename?: 'Owner', id: string, firstName: string, lastName: string, middleName?: string | null, verified: boolean, locations?: Array<{ __typename?: 'Location', id: string, name: string, address?: { __typename?: 'Address', id: string, latitude: number, longitude: number } | null }> | null } | null }> };


export const GetAllUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"middleName"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}},{"kind":"Field","name":{"kind":"Name","value":"locations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAllUsersQuery, GetAllUsersQueryVariables>;