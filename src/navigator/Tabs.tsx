import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import {Credentials} from '../screens/Credentials';
import {LinksEmergency} from '../screens/LinkEmergency';
import TelefonosUtiles from '../screens/TelefonosUtiles';
import Uma from '../screens/Uma';
import {TabBarIcon} from './components/TabBarIcon/TabBarIcon';
import {styles} from './Tabs.styles';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarIconStyle: styles.tabBarIconStyle,
        tabBarShowLabel: false,

        tabBarIcon: ({color, focused, size}) => (
          <TabBarIcon focused={focused} route={route} />
        ),
      })}>
      <Tab.Screen
        name="Credenciales"
        options={{headerShown: false}}
        component={Credentials}
      />
      <Tab.Screen name="Uma" component={Uma} />
      <Tab.Screen
        name="TelefonosUtiles"
        options={{headerShown: false}}
        component={TelefonosUtiles}
      />
      <Tab.Screen
        name="LinksEmergencias"
        options={{headerShown: false}}
        component={LinksEmergency}
      />
    </Tab.Navigator>
  );
};
