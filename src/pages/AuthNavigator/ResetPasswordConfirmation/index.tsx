import * as React from 'react';
import {Header, Button, Screen, Distribution} from '~/components';
import {Div, Spacing, Text} from '~/components/Atomics';
import {IResetPasswordConfirmation} from '~/pages/AuthNavigator/ResetPasswordConfirmation/ResetPasswordConfirmation.types';
import {Check} from '~/assets/svgs';

export const ResetPasswordConfirmation = (
  props: IResetPasswordConfirmation.IView
) => (
  <Div flex={1} bg="white" testID={`ResetPasswordConfirmation`}>
    <Header />
    <Distribution justifyContent="center">
      <Spacing space={8}>
        <Div
          alignSelf="center"
          center
          width={64}
          height={64}
          radius="circle"
          bg="success"
        >
          <Check color="white" width="32" height="32" />
        </Div>
        <Text
          variant="title"
          textAlign="center"
        >{`Senha redefinida\ncom sucesso!`}</Text>
        <Button label="Voltar para login" variant="primary" />
      </Spacing>
    </Distribution>
  </Div>
);
