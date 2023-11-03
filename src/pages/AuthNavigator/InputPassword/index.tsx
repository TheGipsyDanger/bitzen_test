import * as React from 'react';
import {Div, Spacing, Text, Screen} from '~/components/Atomics';
import {Header, Button, FormInput} from '~/components';
import {IInputPassword} from '~/pages/AuthNavigator/InputPassword/InputPassword.types';
import {useInputPassword} from '~/pages/AuthNavigator/InputPassword/InputPassword.model';
import {Controller} from 'react-hook-form';

export const InputPassword = (props: IInputPassword.IView) => {
  const {control, trigger, handleSubmit, onSubmit, errors, isValid} =
    useInputPassword(props);

  return (
    <Screen.Default bg="neutral_100" testID={`InputPassword`}>
      <Header />
      <Div flex={1} justifyContent="center" px={4}>
        <Spacing space={4}>
          <Text
            variant="title"
            textAlign="center"
          >{`Crie uma nova senha`}</Text>
          <Text
            variant="infos"
            color="neutral_500"
            textAlign="center"
          >{`Crie uma nova senha de\nacesso à sua conta.`}</Text>
          <Controller
            control={control}
            name="password"
            defaultValue=""
            render={({field: {onChange, onBlur, value, name}}) => (
              <FormInput
                placeholder="Nova senha"
                {...{onChange, onBlur, value, name, trigger, errors}}
              />
            )}
          />
          <Controller
            control={control}
            name="confirmedPassword"
            defaultValue=""
            render={({field: {onChange, onBlur, value, name}}) => (
              <FormInput
                placeholder="Confirmar nova senha"
                {...{onChange, onBlur, value, name, trigger, errors}}
              />
            )}
          />
          <Button label="Redefinir senha" variant="primary" />
        </Spacing>
      </Div>
    </Screen.Default>
  );
};
