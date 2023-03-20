import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ListItem, Image } from '@rneui/themed';
import {
  Ionicons,
  EvilIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { EventsListItemType } from '../../types/EventsListItemType';
import { Avatar } from '@rneui/base';

export default function EventsListItem({ id }: EventsListItemType) {
  return (
    <View key={id} style={styles.listItem}>
      {(parseInt(id) === 1 || parseInt(id) % 3 == 0) && (
        <Text style={styles.listItem.header}>Today</Text>
      )}
      <ListItem bottomDivider>
        <Avatar size={100} source={require('../../assets/icon.png')} />
        <ListItem.Content>
          <ListItem.Title>Naperville Yard Indoor Sports Complex</ListItem.Title>
          <ListItem.Subtitle>
            <EvilIcons name="location" />
            <Ionicons name="time-outline" />
            <Ionicons name="people" />
            <MaterialCommunityIcons name="soccer-field" />
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    margin: 0,
    header: {
      fontSize: 20,
      color: '#10454f',
      paddingLeft: 10,
      paddingRight: 10,
      marginTop: 20,
    },
  },
});
