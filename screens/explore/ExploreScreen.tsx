import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Explore'>

export default function ExploreScreen({ navigation }: Props) {
  return (
    <View>
      <Text>Explore page!</Text>
      <Button
        title="Welcome Page"
        onPress={() =>
          navigation.navigate('Welcome')
        }
      />
    </View>
  )
}
