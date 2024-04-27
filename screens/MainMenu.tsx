import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IconProps } from '@expo/vector-icons/build/createIconSet';
import { Ionicons } from '@expo/vector-icons';

import * as Tabs from '../tabs/tabs';

const Tab = createBottomTabNavigator();

export function MainMenu() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: IconProps<any>['name'] = '';
          switch (route.name) {
            case 'Explore':
              iconName = focused ? 'football' : 'football-outline';
              break;
            case 'Favorites':
              iconName = focused ? 'heart-sharp' : 'heart-outline';
              break;
            case 'Messages':
              iconName = focused
                ? 'chatbox-ellipses'
                : 'chatbox-ellipses-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person-circle' : 'person-circle-outline';
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#10454f',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="Explore"
        component={Tabs.Explore}
        options={{ headerShown: false, tabBarLabel: 'Explore' }}
      />
      <Tab.Screen
        name="Favorites"
        component={Tabs.Favorites}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Messages"
        component={Tabs.Messages}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Tabs.Profile}
        options={{ headerShown: false }}
      />

      <Tab.Group>
        <Tab.Screen
          name="CreateLocation"
          component={Tabs.CreateLocation}
          options={{ headerShown: false }}
        ></Tab.Screen>
      </Tab.Group>
    </Tab.Navigator>
  );
}
