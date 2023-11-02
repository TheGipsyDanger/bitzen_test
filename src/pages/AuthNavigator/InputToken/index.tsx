import * as React from 'react';
import {Div, Text} from '~/components/Atomics';
import {IInputToken} from '~/pages/AuthNavigator/InputToken/InputToken.types';

export const InputToken = (props: IInputToken.IView) => (
  <Div flex={1} center testID={`InputToken`}>
    <Text>{`InputToken`}</Text>
  </Div>
);
