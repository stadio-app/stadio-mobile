import React, { ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ListItem } from '@rneui/themed';
import {
  Ionicons,
  EvilIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { Avatar } from '@rneui/base';
import { ListItemChevron } from '@rneui/base/dist/ListItem/ListItem.Chevron';
import { Event } from '../../generated/graphql';
import dayjs from 'dayjs';

export type EventListItemProps = {
  event: Event;
};

export default function EventsListItem({ event }: EventListItemProps) {
  type PropsWithChildren<P> = P & { children?: ReactNode };
  const IconView = ({ children }: PropsWithChildren<{}>) => {
    return <View style={styles.iconView}>{children}</View>;
  };
  return (
    <View key={event.id} style={styles.listItem}>
      {(parseInt(event.id) === 1 || parseInt(event.id) % 3 == 0) && (
        <Text style={styles.listItem.header}>Today</Text>
      )}
      <ListItem bottomDivider>
        <Avatar size={100} source={require('../../assets/icon.png')} />
        <ListItem.Content>
          <ListItem.Title>{event.location?.name}</ListItem.Title>
          <ListItem.Subtitle style={styles.contentGrid}>
            <View>
              <IconView>
                <EvilIcons name="location" />
                <Text>{event.location?.address?.fullAddress}</Text>
              </IconView>
              <IconView>
                <Ionicons name="time-outline" />
                <Text>{dayjs(event.startDate).format('h:mm A')}</Text>
              </IconView>
            </View>
            <View>
              <IconView>
                <Ionicons name="people" />
                <Text>10/15</Text>
              </IconView>
              <IconView>
                <MaterialCommunityIcons name="soccer-field" />
                <Text>Indoor</Text>
              </IconView>
            </View>
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItemChevron />
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
  contentGrid: {
    marginTop: 10,
  },
  iconView: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 5,
    marginLeft: 5,
  },
});
