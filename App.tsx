import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { WelcomeScreen } from './screens/welcome/WelcomScreen'
import ExploreScreen from './screens/explore/ExploreScreen'

export type RootStackParamList = {
  Welcome: undefined
  Explore: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            title: 'Welcome',
            // headerShown: false,
          }}
        />
        <Stack.Screen 
          name="Explore"
          component={ExploreScreen}
          options={{
            title: "Explore"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
