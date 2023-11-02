import * as React from 'react';
import {Div, Text} from '~/components/Atomics';
import {IResetPassordSuccess} from '~/pages/AuthNavigator/ResetPassordSuccess/ResetPassordSuccess.types';

export const ResetPassordSuccess = (props: IResetPassordSuccess.IView) => (
  <Div flex={1} center testID={`ResetPassordSuccess`}>
    <Text>{`ResetPassordSuccess`}</Text>
  </Div>
);
