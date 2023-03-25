import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { View } from 'react-native';
import { GetAllUsersQuery } from '../../generated/graphql';

const GET_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      email
      phoneNumber
      name
      avatar
      active
      owner {
        id
        firstName
        lastName
        middleName
        verified
        locations {
          id
          name
          address {
            id
            latitude
            longitude
          }
        }
      }
    }
  }
`;

export function Favorites() {
  const { loading, data, error } = useQuery<GetAllUsersQuery>(GET_ALL_USERS);
  return <View></View>;
}
