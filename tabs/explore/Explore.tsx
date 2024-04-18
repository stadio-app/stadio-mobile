import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { SearchBar } from '@rneui/themed';
import { persons } from './temp_data';
import EventsListItem from '../../components/EventsListItem/EventsListItem';
import { Ionicons } from '@expo/vector-icons';
import { gql, useQuery } from '@apollo/client';
import { EventsQuery, EventsQueryVariables } from '../../generated/graphql';

const ALL_EVENTS = gql`
  query Events($filters: AllEventsFilter!) {
    allEvents(filter: $filters) {
      id
      type
      startDate
      endDate
      location {
        id
        name
        address {
          id
          latitude
          longitude
          fullAddress
          mapsLink
          countryCode
          country
        }
      }
      createdBy {
        id
        name
      }
    }
  }
`;

export function Explore() {
  const [search, setSearch] = useState('');
  const { data, loading, error } = useQuery<EventsQuery, EventsQueryVariables>(
    ALL_EVENTS,
    {
      variables: {
        filters: {
          radiusMeters: 6_000_000,
          countryCode: 'US',
          latitude: 41.8823144, // See https://docs.expo.dev/versions/latest/sdk/location/ to get user's geolocation
          longitude: -87.6346181,
          endDate: '2024-06-01T00:00:00.674Z',
          startDate: '2024-01-01T00:00:00.674Z',
        },
      },
    }
  );

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.header.subheader}>Discover</Text>
          <Text style={styles.header.title}>Pick-up Games</Text>
        </View>
        <SearchBar
          placeholder="Explore pick up games"
          onChangeText={(value) => setSearch(value)}
          value={search}
          platform={Platform.OS == 'ios' ? 'ios' : 'android'}
          // showLoading={true}
          // loadingProps={{}}
          round={true}
          searchIcon={<Ionicons name="search" size={25} color="#777" />}
        />
        <ScrollView>
          {persons.map((p) => (
            <EventsListItem key={p.id} id={p.id} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  header: {
    backgroundColor: '#10454f',
    width: '100%',
    padding: 20,
    paddingTop: '18%',
    subheader: {
      fontSize: 20,
      color: 'white',
    },
    title: {
      fontSize: 40,
      color: '#BDE038',
    },
  },
});
