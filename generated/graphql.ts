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
  Time: any;
  Upload: any;
};

export type Address = {
  __typename?: 'Address';
  country?: Maybe<Scalars['String']>;
  countryCode: Scalars['String'];
  createdAt: Scalars['Time'];
  createdBy?: Maybe<CreatedByUser>;
  createdById?: Maybe<Scalars['ID']>;
  distance?: Maybe<Scalars['Float']>;
  fullAddress: Scalars['String'];
  id: Scalars['ID'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  mapsLink: Scalars['String'];
  updatedAt: Scalars['Time'];
  updatedBy?: Maybe<UpdatedByUser>;
  updatedById?: Maybe<Scalars['ID']>;
};

export type AdministrativeDivision = {
  __typename?: 'AdministrativeDivision';
  cities: Scalars['String'];
  name: Scalars['String'];
};

export type AllEventsFilter = {
  countryCode: Scalars['String'];
  endDate: Scalars['Time'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  radiusMeters: Scalars['Int'];
  startDate: Scalars['Time'];
};

export type Auth = {
  __typename?: 'Auth';
  isNewUser?: Maybe<Scalars['Boolean']>;
  token: Scalars['String'];
  user: User;
};

export enum AuthPlatformType {
  Apple = 'APPLE',
  Google = 'GOOGLE',
  Internal = 'INTERNAL'
}

export type Country = {
  __typename?: 'Country';
  administrativeDivisions: Array<AdministrativeDivision>;
  callingCode?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  currency?: Maybe<Currency>;
  language?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type CreateAccountInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
};

export type CreateAddress = {
  administrativeDivision: Scalars['String'];
  city: Scalars['String'];
  countryCode: Scalars['String'];
  fullAddress: Scalars['String'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  mapsLink: Scalars['String'];
};

export type CreateEvent = {
  description?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Time'];
  locationId: Scalars['ID'];
  name: Scalars['String'];
  startDate: Scalars['Time'];
  type: Scalars['String'];
};

export type CreateLocation = {
  address: CreateAddress;
  description?: InputMaybe<Scalars['String']>;
  images: Array<CreateLocationImage>;
  instances: Array<CreateLocationInstance>;
  name: Scalars['String'];
  schedule: Array<CreateLocationSchedule>;
  type: Scalars['String'];
};

export type CreateLocationImage = {
  caption?: InputMaybe<Scalars['String']>;
  default: Scalars['Boolean'];
  image: Scalars['Upload'];
};

export type CreateLocationInstance = {
  name: Scalars['String'];
};

export type CreateLocationSchedule = {
  available: Scalars['Boolean'];
  day: WeekDay;
  from?: InputMaybe<Scalars['Int']>;
  on?: InputMaybe<Scalars['Time']>;
  to?: InputMaybe<Scalars['Int']>;
};

export type CreatedByUser = {
  __typename?: 'CreatedByUser';
  active?: Maybe<Scalars['Boolean']>;
  avatar?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Currency = {
  __typename?: 'Currency';
  currencyCode: Scalars['String'];
  decimals: Scalars['Int'];
  name: Scalars['String'];
  numToBasic?: Maybe<Scalars['Int']>;
  symbol: Scalars['String'];
  symbolNative: Scalars['String'];
};

export type Event = {
  __typename?: 'Event';
  approved: Scalars['Boolean'];
  createdAt: Scalars['Time'];
  createdBy?: Maybe<CreatedByUser>;
  createdById?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  endDate: Scalars['Time'];
  id: Scalars['ID'];
  location?: Maybe<Location>;
  locationId: Scalars['ID'];
  locationInstanceId: Scalars['ID'];
  name: Scalars['String'];
  startDate: Scalars['Time'];
  type: Scalars['String'];
  updatedAt: Scalars['Time'];
  updatedBy?: Maybe<UpdatedByUser>;
  updatedById?: Maybe<Scalars['ID']>;
};

export type EventShallow = {
  __typename?: 'EventShallow';
  approved: Scalars['Boolean'];
  createdAt: Scalars['Time'];
  createdById?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  endDate: Scalars['Time'];
  id: Scalars['ID'];
  locationId: Scalars['ID'];
  locationInstanceId: Scalars['ID'];
  name: Scalars['String'];
  startDate: Scalars['Time'];
  type: Scalars['String'];
  updatedAt: Scalars['Time'];
  updatedById?: Maybe<Scalars['ID']>;
};

export type Location = {
  __typename?: 'Location';
  address?: Maybe<Address>;
  addressId: Scalars['ID'];
  createdAt: Scalars['Time'];
  createdBy?: Maybe<CreatedByUser>;
  createdById?: Maybe<Scalars['ID']>;
  deleted: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  locationImages: Array<LocationImage>;
  locationInstances: Array<LocationInstance>;
  locationSchedule: Array<LocationSchedule>;
  name: Scalars['String'];
  owner?: Maybe<Owner>;
  ownerId?: Maybe<Scalars['ID']>;
  status: Scalars['String'];
  type: Scalars['String'];
  updatedAt: Scalars['Time'];
  updatedBy?: Maybe<UpdatedByUser>;
  updatedById?: Maybe<Scalars['ID']>;
};

export type LocationImage = {
  __typename?: 'LocationImage';
  caption?: Maybe<Scalars['String']>;
  default: Scalars['Boolean'];
  id: Scalars['ID'];
  originalFilename: Scalars['String'];
  uploadId: Scalars['String'];
};

export type LocationInstance = {
  __typename?: 'LocationInstance';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type LocationSchedule = {
  __typename?: 'LocationSchedule';
  available: Scalars['Boolean'];
  createdAt: Scalars['Time'];
  day: WeekDay;
  from?: Maybe<Scalars['Time']>;
  id: Scalars['ID'];
  location?: Maybe<Location>;
  locationId: Scalars['ID'];
  on?: Maybe<Scalars['Time']>;
  toDuration?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['Time'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount: User;
  createEvent: EventShallow;
  createLocation: Location;
  resendEmailVerificationCode: Scalars['Boolean'];
  verifyEmail: User;
};


export type MutationCreateAccountArgs = {
  input: CreateAccountInput;
};


export type MutationCreateEventArgs = {
  input: CreateEvent;
};


export type MutationCreateLocationArgs = {
  input: CreateLocation;
};


export type MutationResendEmailVerificationCodeArgs = {
  email: Scalars['String'];
};


export type MutationVerifyEmailArgs = {
  verificationCode: Scalars['String'];
};

export type Owner = {
  __typename?: 'Owner';
  createdAt: Scalars['Time'];
  firstName: Scalars['String'];
  fullName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Time'];
  user?: Maybe<UserShallow>;
  userId: Scalars['ID'];
  verified: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  allEvents: Array<Event>;
  getAllCountries: Array<Country>;
  googleOAuth: Auth;
  login: Auth;
  me: User;
};


export type QueryAllEventsArgs = {
  filter: AllEventsFilter;
};


export type QueryGoogleOAuthArgs = {
  accessToken: Scalars['String'];
  ipAddress?: InputMaybe<Scalars['String']>;
};


export type QueryLoginArgs = {
  email: Scalars['String'];
  ipAddress?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type UpdatedByUser = {
  __typename?: 'UpdatedByUser';
  active?: Maybe<Scalars['Boolean']>;
  avatar?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  active: Scalars['Boolean'];
  authPlatform?: Maybe<AuthPlatformType>;
  authStateId?: Maybe<Scalars['ID']>;
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

export type UserShallow = {
  __typename?: 'UserShallow';
  active?: Maybe<Scalars['Boolean']>;
  avatar?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export enum WeekDay {
  Friday = 'FRIDAY',
  Monday = 'MONDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
  Thursday = 'THURSDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY'
}

export type CreateAccountMutationVariables = Exact<{
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateAccountMutation = { __typename?: 'Mutation', createAccount: { __typename?: 'User', id: string, name: string, email: string, phoneNumber?: string | null, createdAt: any, updatedAt: any, authPlatform?: AuthPlatformType | null } };

export type VerifyEmailMutationVariables = Exact<{
  verificationCode: Scalars['String'];
}>;


export type VerifyEmailMutation = { __typename?: 'Mutation', verifyEmail: { __typename?: 'User', id: string, name: string, email: string, avatar?: string | null, createdAt: any, updatedAt: any, active: boolean, authPlatform?: AuthPlatformType | null, authStateId?: string | null } };

export type ResendVerificationMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ResendVerificationMutation = { __typename?: 'Mutation', resendEmailVerificationCode: boolean };

export type LoginQueryVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginQuery = { __typename?: 'Query', login: { __typename?: 'Auth', token: string, user: { __typename?: 'User', id: string, name: string, email: string, avatar?: string | null, createdAt: any, updatedAt: any, active: boolean, authPlatform?: AuthPlatformType | null, authStateId?: string | null } } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, name: string, email: string, avatar?: string | null, createdAt: any, updatedAt: any, active: boolean, authPlatform?: AuthPlatformType | null, authStateId?: string | null } };

export type GoogleOauthQueryVariables = Exact<{
  accessToken: Scalars['String'];
}>;


export type GoogleOauthQuery = { __typename?: 'Query', googleOAuth: { __typename?: 'Auth', token: string, isNewUser?: boolean | null, user: { __typename?: 'User', id: string, name: string, email: string, avatar?: string | null, createdAt: any, updatedAt: any, active: boolean, authPlatform?: AuthPlatformType | null, authStateId?: string | null } } };

export type EventsQueryVariables = Exact<{
  filters: AllEventsFilter;
}>;


export type EventsQuery = { __typename?: 'Query', allEvents: Array<{ __typename?: 'Event', id: string, type: string, startDate: any, endDate: any, location?: { __typename?: 'Location', id: string, name: string, address?: { __typename?: 'Address', id: string, latitude: number, longitude: number, fullAddress: string, mapsLink: string, countryCode: string, country?: string | null } | null } | null, createdBy?: { __typename?: 'CreatedByUser', id: string, name: string } | null }> };


export const CreateAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"authPlatform"}}]}}]}}]} as unknown as DocumentNode<CreateAccountMutation, CreateAccountMutationVariables>;
export const VerifyEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VerifyEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"verificationCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"verificationCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"verificationCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"authPlatform"}},{"kind":"Field","name":{"kind":"Name","value":"authStateId"}}]}}]}}]} as unknown as DocumentNode<VerifyEmailMutation, VerifyEmailMutationVariables>;
export const ResendVerificationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResendVerification"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resendEmailVerificationCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}]}}]} as unknown as DocumentNode<ResendVerificationMutation, ResendVerificationMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"authPlatform"}},{"kind":"Field","name":{"kind":"Name","value":"authStateId"}}]}}]}}]}}]} as unknown as DocumentNode<LoginQuery, LoginQueryVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"authPlatform"}},{"kind":"Field","name":{"kind":"Name","value":"authStateId"}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const GoogleOauthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GoogleOauth"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accessToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"googleOAuth"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"accessToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accessToken"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"authPlatform"}},{"kind":"Field","name":{"kind":"Name","value":"authStateId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isNewUser"}}]}}]}}]} as unknown as DocumentNode<GoogleOauthQuery, GoogleOauthQueryVariables>;
export const EventsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Events"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AllEventsFilter"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allEvents"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"fullAddress"}},{"kind":"Field","name":{"kind":"Name","value":"mapsLink"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<EventsQuery, EventsQueryVariables>;