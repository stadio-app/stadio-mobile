/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation CreateAccount($email: String!, $name: String!, $password: String!) {\n    createAccount(input:{\n      email: $email,\n      name: $name,\n      password: $password\n    }) {\n      id\n      name\n      email\n      phoneNumber\n      createdAt\n      updatedAt\n      authPlatform\n    }\n  }\n": types.CreateAccountDocument,
    "\n  query Login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        id\n        name\n        email\n        avatar\n        createdAt\n        updatedAt\n        active\n        authPlatform\n        authStateId\n      }\n    }\n  }\n": types.LoginDocument,
    "\n  query Me {\n    me {\n      id\n      name\n      email\n      avatar\n      createdAt\n      updatedAt\n      active\n      authPlatform\n      authStateId\n    }\n  }\n": types.MeDocument,
    "\n  query GoogleOauth($accessToken: String!) {\n    googleOAuth(accessToken: $accessToken) {\n      token\n      user {\n        id\n        name\n        email\n        avatar\n        createdAt\n        updatedAt\n        active\n        authPlatform\n        authStateId\n      }\n      isNewUser\n    }\n  }\n": types.GoogleOauthDocument,
    "\n  query Events($filters: AllEventsFilter!) {\n    allEvents(filter: $filters) {\n      id\n      type\n      startDate\n      endDate\n      location {\n        id\n        name\n        address {\n          id\n          latitude\n          longitude\n          fullAddress\n          mapsLink\n          countryCode\n          country\n        }\n      }\n      createdBy {\n        id\n        name\n      }\n    }\n  }\n": types.EventsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateAccount($email: String!, $name: String!, $password: String!) {\n    createAccount(input:{\n      email: $email,\n      name: $name,\n      password: $password\n    }) {\n      id\n      name\n      email\n      phoneNumber\n      createdAt\n      updatedAt\n      authPlatform\n    }\n  }\n"): (typeof documents)["\n  mutation CreateAccount($email: String!, $name: String!, $password: String!) {\n    createAccount(input:{\n      email: $email,\n      name: $name,\n      password: $password\n    }) {\n      id\n      name\n      email\n      phoneNumber\n      createdAt\n      updatedAt\n      authPlatform\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        id\n        name\n        email\n        avatar\n        createdAt\n        updatedAt\n        active\n        authPlatform\n        authStateId\n      }\n    }\n  }\n"): (typeof documents)["\n  query Login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        id\n        name\n        email\n        avatar\n        createdAt\n        updatedAt\n        active\n        authPlatform\n        authStateId\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Me {\n    me {\n      id\n      name\n      email\n      avatar\n      createdAt\n      updatedAt\n      active\n      authPlatform\n      authStateId\n    }\n  }\n"): (typeof documents)["\n  query Me {\n    me {\n      id\n      name\n      email\n      avatar\n      createdAt\n      updatedAt\n      active\n      authPlatform\n      authStateId\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GoogleOauth($accessToken: String!) {\n    googleOAuth(accessToken: $accessToken) {\n      token\n      user {\n        id\n        name\n        email\n        avatar\n        createdAt\n        updatedAt\n        active\n        authPlatform\n        authStateId\n      }\n      isNewUser\n    }\n  }\n"): (typeof documents)["\n  query GoogleOauth($accessToken: String!) {\n    googleOAuth(accessToken: $accessToken) {\n      token\n      user {\n        id\n        name\n        email\n        avatar\n        createdAt\n        updatedAt\n        active\n        authPlatform\n        authStateId\n      }\n      isNewUser\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Events($filters: AllEventsFilter!) {\n    allEvents(filter: $filters) {\n      id\n      type\n      startDate\n      endDate\n      location {\n        id\n        name\n        address {\n          id\n          latitude\n          longitude\n          fullAddress\n          mapsLink\n          countryCode\n          country\n        }\n      }\n      createdBy {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query Events($filters: AllEventsFilter!) {\n    allEvents(filter: $filters) {\n      id\n      type\n      startDate\n      endDate\n      location {\n        id\n        name\n        address {\n          id\n          latitude\n          longitude\n          fullAddress\n          mapsLink\n          countryCode\n          country\n        }\n      }\n      createdBy {\n        id\n        name\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;