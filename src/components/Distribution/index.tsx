import * as React from 'react';
import {Div, Screen} from '~/components/Atomics';
import {IDistribution} from '~/components/Distribution/Distribution.types';

export const Distribution = ({children, ...props}: IDistribution.IView) => (
  <Screen.Default bg="white">
    <Div flex={1} bg="white" px={4} {...props}>
      {children}
    </Div>
  </Screen.Default>
);
