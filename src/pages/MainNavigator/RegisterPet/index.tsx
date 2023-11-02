import * as React from 'react';
import {Div, Text} from '~/components/Atomics';
import { IRegisterPet } from '~/pages/MainNavigator/RegisterPet/RegisterPet.types'

export const RegisterPet = (props: IRegisterPet.IView) => (
  <Div flex={1} center testID={`RegisterPet`}>
    <Text>{`RegisterPet`}</Text>
  </Div>
)