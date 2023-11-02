import * as React from 'react';
import {Div, Text} from '~/components/Atomics';
import {IHome} from '~/pages/MainNavigator/Home/Home.types';

export const Home = (props: IHome.IView) => (
  <Div flex={1} center testID={`Home`}>
    <Text>{`Home`}</Text>
  </Div>
);
