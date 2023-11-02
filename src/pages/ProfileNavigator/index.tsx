import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { routes } from "./navigator";

const ProfileStack = createStackNavigator();

export default function ProfileRoutes() {
  return (
    <ProfileStack.Navigator>
      {routes.map((view) => (
        <ProfileStack.Screen {...view} />
      ))}
    </ProfileStack.Navigator>
  )
}
