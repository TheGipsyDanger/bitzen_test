import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as views from '../pages';
import {inTest} from '../../app.json';
import * as Icons from '~/assets/svgs';
import {TabIcon} from '~/components';

const Stack = createStackNavigator();
const Main = createBottomTabNavigator();

const tabViewsNames = ['MainNavigator', 'ProfileNavigator'];

const Tabs = () => (
  <Main.Navigator
    initialRouteName={'ProfileNavigator'}
    screenOptions={({route}) => ({
      tabBarShowLabel: false,
      tabBarIcon: ({focused, color}) => (
        <TabIcon routeName={route.name} focused={focused} color={color} />
      ),
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
