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
import { Ionicons } from '@expo/vector-icons';
import { useQuery } from '@apollo/client';
import { EventsQuery, EventsQueryVariables } from '../../generated/graphql';
import { gql } from '../../generated';
import { EventsList } from './EventsList';
import { AuthContext } from '../../store/AuthStore';
import dayjs from 'dayjs';

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
        locationImages {
          uploadId
          default
        }
      }
      createdBy {
        id
        name
      }
    }
  }
`);

type AllEvents = EventsQuery['allEvents'];
export type GroupedEvents = {
  label: string;
  events: AllEvents;
};

export function Explore() {
  const { authState } = useContext(AuthContext);
  const [search, setSearch] = useState('');
  const [radius, setRadius] = useState(500000);
  const [latitude, setLatitude] = useState(41.8823144);
  const [longitude, setLongitude] = useState(-87.6346181);
  const { data, loading, error } = useQuery<EventsQuery, EventsQueryVariables>(
    ALL_EVENTS,
    {
      context: { headers: { authorization: `Bearer ${authState.token}` } },
      variables: {
        filters: {
          radiusMeters: radius,
          countryCode: 'US',
          latitude: latitude, // See https://docs.expo.dev/versions/latest/sdk/location/ to get user's geolocation
          longitude: longitude,
          endDate: '2024-06-01T00:00:00.674Z',
          startDate: '2024-01-01T00:00:00.674Z',
        },
      },
    }
  );

  function dateGroupedData(events: AllEvents): GroupedEvents[] {
    const today = dayjs(new Date());
    const groupedEvents = events.reduce((map, event) => {
      const eventDate = dayjs(event.startDate);
      let key = 'Upcoming';
      if (eventDate.diff(today, 'day') === 0) {
        key = 'Today';
      } else if (eventDate.diff(today, 'day') === 1) {
        key = 'Tomorrow';
      } else if (eventDate.diff(today, 'week') === 0) {
        key = 'This Week';
      } else if (eventDate.diff(today, 'week') === 1) {
        key = 'Next Week';
      }

      if (!map.has(key)) map.set(key, []);
      map.get(key)?.push(event);
      return map;
    }, new Map<string, AllEvents>());

    return Array.from(groupedEvents.entries()).map<GroupedEvents>(
      ([label, events]) => ({ label, events })
    );
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

        {loading && <Text style={styles.messageLabel}>Loading events...</Text>}

        {!loading && data && data.allEvents.length > 0 ? (
          <ScrollView>
            <EventsList groupedEvents={dateGroupedData(data.allEvents)} />
          </ScrollView>
        ) : (
          <Text style={styles.messageLabel}>No events found</Text>
        )}

        {!loading && error && (
          <Text style={styles.messageLabel}>
            Failed to load events. {error.message}
          </Text>
        )}
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
  messageLabel: {
    textAlign: 'center',
    paddingVertical: 30,
  },
});
