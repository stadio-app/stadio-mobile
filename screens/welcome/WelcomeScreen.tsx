import React from "react"
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button, View } from 'react-native'
import { RootStackParamList } from "../../App"

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>

export function WelcomeScreen({ navigation }: Props) {
  return (
    <View>
      <Button
        title="Navigate to the Explore page"
        onPress={() =>
          navigation.navigate('Explore')
        }
      />
    </View>
  )
}
