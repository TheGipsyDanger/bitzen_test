import * as React from 'react';
import {Div, Text} from '~/components/Atomics';
import {Header, Distribution, Linear} from '~/components';
import {IRegisterPet} from '~/pages/MainNavigator/RegisterPet/RegisterPet.types';

export const RegisterPet = (props: IRegisterPet.IView) => (
  <Div flex={1} bg="white" testID={`RegisterPet`}>
    <Header.Default />
    <Distribution>
      <Linear>
        <Div height={344} width={44} backgroundColor="error"></Div>
      </Linear>
    </Distribution>
  </Div>
);
