import { View, Text, StyleSheet } from 'react-native';
import { Event } from '../../generated/graphql';
import EventsListItem from '../../components/EventsListItem/EventsListItem';
import { GroupedEvents } from './Explore';

export type EventsListProps = {
  groupedEvents: GroupedEvents[];
};

export function EventsList({ groupedEvents }: EventsListProps) {
  return (
    <View>
      {groupedEvents.map(({ label, events }) => (
        <View style={styles.listItem} key={label}>
          <Text style={styles.listItem.header}>{label}</Text>

          {events.map((e) => (
            <EventsListItem event={e as Event} key={e.id} />
          ))}
        </View>
      ))}
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
