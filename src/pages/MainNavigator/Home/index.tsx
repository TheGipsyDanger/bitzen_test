import * as React from 'react';
import {Div, Text} from '~/components/Atomics';
import {Header, Distribution} from '~/components';
import {IHome} from '~/pages/MainNavigator/Home/Home.types';

export const Home = (props: IHome.IView) => (
  <Div flex={1} bg="neutral_100" testID={`Home`}>
    <Header.Internal />
    <Distribution>
      <Text>{`Home`}</Text>
    </Distribution>
  </Div>
);
