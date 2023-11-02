import * as React from 'react';
import {Div, Text} from '~/components/Atomics';
import {IRegister} from '~/pages/AuthNavigator/Register/Register.types';

export const Register = (props: IRegister.IView) => (
  <Div flex={1} center testID={`Register`}>
    <Text>{`Register`}</Text>
  </Div>
);
