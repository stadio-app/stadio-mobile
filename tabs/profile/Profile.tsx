import React, { useContext } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { AuthContext } from '../../store/AuthStore';

export function Profile() {
  const { authState } = useContext(AuthContext);
  if (!authState.user) return <></>;

  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: 15, paddingTop: '18%' }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
          Hi, {authState.user.name}
        </Text>
        <Text style={{ marginTop: 10 }}>{authState.user.email}</Text>
      </View>
    </SafeAreaView>
  );
}
