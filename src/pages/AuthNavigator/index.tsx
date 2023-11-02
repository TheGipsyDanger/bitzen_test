import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {routes} from './navigator';

const AuthStack = createStackNavigator();

export default function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      {routes.map(view => (
        <AuthStack.Screen {...view} />
      ))}
    </AuthStack.Navigator>
  );
}
