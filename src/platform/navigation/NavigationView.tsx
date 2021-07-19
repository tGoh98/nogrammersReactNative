import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AnnouncementsScreen from '../../features/announcements/AnnouncementsScreen';
import EventsScreen from '../../features/events/EventsScreen';
import ProfileScreen from '../../features/profile/ProfileScreen';
import ResourcesScreen from '../../features/resources/ResourcesScreen';
import ShoutoutsScreen from '../../features/shoutouts/ShoutoutsScreen';

/*
 * We use the react-navigation library.
 * More documentation here: https://reactnavigation.org/docs/tab-based-navigation/
 */
const Tab = createBottomTabNavigator();

export default function NavigationView() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Shoutouts" component={ShoutoutsScreen} />
        <Tab.Screen name="Events" component={EventsScreen} />
        <Tab.Screen name="Announcements" component={AnnouncementsScreen} />
        <Tab.Screen name="Resources" component={ResourcesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
