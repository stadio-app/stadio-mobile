import React from "react";
import { Button, View } from 'react-native';

export function WelcomeScreen({ navigation }: any) {
  return (
    <View>
      <Button
        title="Navigate to the Explore page"
        onPress={() =>
          navigation.navigate('explore', { name: 'From Welcome' })
        }
      />
    </View>
  )
}
