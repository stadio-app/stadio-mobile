import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ListItem, Image } from '@rneui/themed';
import {
  Ionicons,
  EvilIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { EventsListItemType } from '../../types/EventsListItemType';

export default function EventsListItem({ id } : EventsListItemType) {
  return (
    <View key={id} style={styles.listItem}>
      {(parseInt(id) === 1 || parseInt(id) % 3 == 0) && (
        <Text style={styles.listItem.header}>Today</Text>
      )}
      <ListItem style={styles.listItem.item}>
        <ListItem.Content style={styles.listItem.container}>
          <Image
            style={styles.listItem.image}
            source={require('../../assets/icon.png')}
          ></Image>
          <View>
            <ListItem.Title style={{ fontSize: 25, width: '70%' }}>
              Naperville Yard Indoor Sports Complex
            </ListItem.Title>
            <EvilIcons name='location' />
            <Ionicons name='time-outline' />
            <Ionicons name='people' />
            <MaterialCommunityIcons name='soccer-field' />
          </View>
        </ListItem.Content>
      </ListItem>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    marginLeft: 20,
    marginRight: 20,
    header: {
      fontSize: 35,
      color: '#10454f',
    },
    item: {
      borderStyle: 'round',
      borderRadius: 10,
      borderColor: 'black',
      borderWidth: 1,
      marginTop: 10,
      marginBottom: 10,
    },
    image: {
      width: 100,
      height: 100,
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      gap: 15,
    },
  },
});
