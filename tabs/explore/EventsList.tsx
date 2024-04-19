import { View } from 'react-native';
import { Event, EventsQuery } from '../../generated/graphql';
import EventsListItem from '../../components/EventsListItem/EventsListItem';

export type EventsListProps = {
  events: EventsQuery['allEvents'];
};

export function EventsList({ events }: EventsListProps) {
  return (
    <View>
      {events.map((e) => (
        <EventsListItem event={e as Event} key={e.id} />
      ))}
    </View>
  );
}
