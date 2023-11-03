import * as React from 'react';
import {Image} from 'react-native';
import {Div, Text} from '~/components/Atomics';
import {Header, Distribution, LinearImage} from '~/components';
import {IHome} from '~/pages/MainNavigator/Home/Home.types';

export const Home = (props: IHome.IView) => (
  <Div flex={1} bg="neutral_100" testID={`Home`}>
    <Header.Internal />
    <Distribution>
      <LinearImage url="https://www.petz.com.br/blog//wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg" />
      <LinearImage url="https://www.petz.com.br/blog//wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg" />
      <LinearImage url="https://www.petz.com.br/blog//wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg" />
    </Distribution>
  </Div>
);
