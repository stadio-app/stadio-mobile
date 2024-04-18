import React, { useContext } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { AuthContext } from '../../store/AuthStore';
import { Button } from '@rneui/base';

const paddingHorizontal = 15;

export function Profile() {
  const { authState } = useContext(AuthContext);
  if (!authState.user) return <></>;

  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal, paddingTop: '18%' }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
          Hi, {authState.user.name}
        </Text>
        <Text style={{ marginTop: 10 }}>{authState.user.email}</Text>
      </View>

      <View style={{ marginTop: '20%', paddingHorizontal, gap: 10 }}>
        <Button onPress={() => console.log('Create Location')}>
          Add New Location
        </Button>
        <Button color={'secondary'}>New Event</Button>
      </View>
    </SafeAreaView>
  );
}
