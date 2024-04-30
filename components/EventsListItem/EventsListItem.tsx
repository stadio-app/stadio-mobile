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
import { cloudinaryFileUrl } from '../../utils/strings';

export type EventListItemProps = {
  event: Event;
};

export default function EventsListItem({ event }: EventListItemProps) {
  type PropsWithChildren<P> = P & { children?: ReactNode };
  const IconView = ({ children }: PropsWithChildren<{}>) => {
    return <View style={styles.iconView}>{children}</View>;
  };
  const defaultImage = event.location?.locationImages?.find((v) => v.default)!;
  return (
    <ListItem bottomDivider>
      <Avatar
        size={100}
        source={{
          uri: cloudinaryFileUrl(defaultImage.uploadId),
        }}
      />
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
  );
}

const styles = StyleSheet.create({
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
