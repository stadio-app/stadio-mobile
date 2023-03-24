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

export function Explore() {
  const [search, setSearch] = useState('');
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
          showLoading={true}
          loadingProps={{}}
          round={true}
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
