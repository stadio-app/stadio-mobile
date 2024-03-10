import React, { useContext, useEffect } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IconProps } from '@expo/vector-icons/build/createIconSet';
import { Ionicons } from '@expo/vector-icons';

import { RootStackParamList } from '../types/RootStackParamList';
import * as Tabs from '../tabs/tabs';
import { AuthContext } from '../store/AuthStore';

const Tab = createBottomTabNavigator();

type Props = NativeStackScreenProps<RootStackParamList, 'MainMenu'>;

export function MainMenu({ navigation }: Props) {
  const { authState } = useContext(AuthContext);

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
        options={{ headerShown: false }}
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
      <Tab.Screen
        name="CreateLocation"
        component={Tabs.CreateLocation}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
