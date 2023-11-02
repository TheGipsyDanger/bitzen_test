import * as React from 'react';
import {Div, Text} from '~/components/Atomics';
import {IResetPassword} from '~/pages/AuthNavigator/ResetPassword/ResetPassword.types';

export const ResetPassword = (props: IResetPassword.IView) => (
  <Div flex={1} center testID={`ResetPassword`}>
    <Text>{`ResetPassword`}</Text>
  </Div>
);
