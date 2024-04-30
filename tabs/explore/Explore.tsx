import React, { useContext, useState } from 'react';
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
import { useQuery } from '@apollo/client';
import { EventsQuery, EventsQueryVariables } from '../../generated/graphql';
import { gql } from '../../generated';
import { EventsList } from './EventsList';
import { AuthContext } from '../../store/AuthStore';

const ALL_EVENTS = gql(`
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
`);

export function Explore() {
  const { authState } = useContext(AuthContext);
  const [search, setSearch] = useState('');
  const { data, loading, error } = useQuery<EventsQuery, EventsQueryVariables>(
    ALL_EVENTS,
    {
      context: { headers: { authorization: `Bearer ${authState.token}` } },
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

  if (data) {
    console.log(data.allEvents);
  }

  return (
    <SafeAreaView style={{ backgroundColor: '#10454f' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.subheader}>Discover</Text>
          <Text style={styles.title}>Pick-up Games</Text>
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
          clearIcon={
            <Ionicons
              name="close-circle"
              size={25}
              color="#777"
              onPress={() => setSearch('')}
            />
          }
          showCancel={false}
          cancelButtonTitle=""
        />

        {loading && (
          <Text style={{ textAlign: 'center' }}>Loading events...</Text>
        )}

        {data && (
          <ScrollView>
            <EventsList events={data.allEvents} />
          </ScrollView>
        )}

        {error && <Text>Failed to load events. {error.message}</Text>}
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
    paddingTop: '10%',
  },
  subheader: {
    fontSize: 20,
    color: 'white',
  },
  title: {
    fontSize: 40,
    color: '#BDE038',
  },
});
