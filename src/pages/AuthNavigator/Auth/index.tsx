import * as React from 'react';
import {Div, Text} from '~/components/Atomics';
import {IAuth} from '~/pages/AuthNavigator/Auth/Auth.types';

export const Auth = (props: IAuth.IView) => (
  <Div flex={1} center testID={`Auth`}>
    <Text>{`Auth`}</Text>
  </Div>
);
