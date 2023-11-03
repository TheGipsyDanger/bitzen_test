import * as React from 'react';
import {Button} from '~/components';
import {Div, Text} from '~/components/Atomics';
import {useRegister} from '~/pages/AuthNavigator/Register/Register.model';

export const HasAccount = () => {
  const {goToLogin} = useRegister({});
  return (
    <Div flexDirection="row" center>
      <Text variant="label">{`Já possui conta?`}</Text>
      <Button onPress={goToLogin} label="Entrar" variant="link" ml={1} />
    </Div>
  );
};
