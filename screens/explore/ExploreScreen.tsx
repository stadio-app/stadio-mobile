import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ExploreScreen({ navigation }: any) {
  return (
    <View>
      <Text>Explore page!</Text>
      <Button
        title="Welcome Page"
        onPress={() =>
          navigation.navigate('welcome', { name: 'From Explore page' })
        }
      />
    </View>
  )
}
