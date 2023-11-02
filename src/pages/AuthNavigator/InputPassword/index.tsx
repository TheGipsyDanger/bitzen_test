import * as React from 'react';
import {Div, Text} from '~/components/Atomics';
import {IInputPassword} from '~/pages/AuthNavigator/InputPassword/InputPassword.types';

export const InputPassword = (props: IInputPassword.IView) => (
  <Div flex={1} center testID={`InputPassword`}>
    <Text>{`InputPassword`}</Text>
  </Div>
);
