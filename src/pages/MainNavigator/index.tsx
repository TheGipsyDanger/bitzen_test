import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { routes } from "./navigator";

const MainStack = createStackNavigator();

export default function MainRoutes() {
  return (
    <MainStack.Navigator>
      {routes.map((view) => (
        <MainStack.Screen {...view} />
      ))}
    </MainStack.Navigator>
  )
}
