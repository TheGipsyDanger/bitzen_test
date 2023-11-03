import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as views from '../pages';
import {inTest} from '../../app.json';
import * as Icons from '~/assets/svgs';

const Stack = createStackNavigator();
const Main = createBottomTabNavigator();

const tabViewsNames = ['MainNavigator', 'ProfileNavigator'];

const Tabs = () => (
  <Main.Navigator
    initialRouteName={'MainNavigator'}
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        return route.name === 'MainNavigator' ? (
          <Icons.Pet color={!focused ? '#8C8C8C' : '#183E4B'} />
        ) : (
          <Icons.User color={!focused ? '#8C8C8C' : '#183E4B'} />
        );
      },
      tabBarActiveTintColor: '#183E4B',
      tabBarInactiveTintColor: '#8C8C8C',
    })}
  >
    {tabViewsNames.map(viewName => (
      <Stack.Screen key={viewName} {...defineRoutesProps(viewName)} />
    ))}
  </Main.Navigator>
);

const allViews: {[key: string]: any} = {
  ...views,
  TabNavigator: Tabs,
};

function defineRoutesProps(name: string) {
  return {
    name,
    options: {headerShown: false},
    component: allViews[name],
  };
}

const viewsNames = Object.keys(views);

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName={inTest ? 'Test' : 'TabNavigator'}>
      {viewsNames.map(viewName => (
        <Stack.Screen key={viewName} {...defineRoutesProps(viewName)} />
      ))}
      <Stack.Screen
        component={Tabs}
        name="TabNavigator"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
