import * as React from 'react';
import {Div, Conditional, Text} from '~/components/Atomics';
import {ITabIcon} from '~/components/TabIcon/TabIcon.types';
import * as Icons from '~/assets/svgs';

export const TabIcon = ({color, focused, routeName}: ITabIcon.IView) => (
  <Div testID={`TabIcon`}>
    <Conditional render={routeName === 'MainNavigator'}>
      <Div center>
        <Icons.Pet color={color} width="24" height="24" />
        <Text variant="label" color={focused ? 'blue_black' : 'neutral_500'}>
          {'Pets'}
        </Text>
      </Div>
      <Div center>
        <Icons.User color={color} width="24" height="24" />
        <Text variant="label" color={focused ? 'blue_black' : 'neutral_500'}>
          {'Conta'}
        </Text>
      </Div>
    </Conditional>
  </Div>
);
