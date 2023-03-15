import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { WelcomeScreen } from './screens/welcome/WelcomScreen'
import ExploreScreen from './screens/explore/ExploreScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="welcome"
          component={WelcomeScreen}
          options={{
            title: 'Welcome',
            // headerShown: false,
          }}
        />
        <Stack.Screen 
          name="explore"
          component={ExploreScreen}
          options={{
            title: "Explore"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
