import * as React from 'react';
import {Div, Spacing, Text} from '~/components/Atomics';
import {Header, Button, FormInput, Distribution} from '~/components';
import {useResetPassword} from '~/pages/AuthNavigator/ResetPassword/ResetPassword.model';
import {IResetPassword} from '~/pages/AuthNavigator/ResetPassword/ResetPassword.types';
import {Password} from '~/assets/svgs';
import {Controller} from 'react-hook-form';

export const ResetPassword = (props: IResetPassword.IView) => {
  const {control, handleSubmit, errors, trigger, isValid, onSubmit} =
    useResetPassword(props);

  return (
    <Div flex={1} bg="white" testID={`ResetPassword`}>
      <Header.Default />
      <Distribution justifyContent="center">
        <Spacing space={4}>
          <Div
            alignSelf="center"
            bg="blue_black"
            width={80}
            height={80}
            radius="circle"
            center
          >
            <Password color="white" width="32" height="32" />
          </Div>
          <Text
            variant="title"
            textAlign="center"
          >{`Esqueceu a sua senha?`}</Text>
          <Text
            variant="infos"
            color="neutral_500"
            textAlign="center"
          >{`Vamos te ajudar nisso! Primeiro, digite seu\ne-mail cadastrado ao criar a sua conta.`}</Text>
          <Controller
            control={control}
            name="email"
            defaultValue=""
            render={({field: {onChange, onBlur, value, name}}) => (
              <FormInput
                placeholder="E-mail"
                {...{onChange, onBlur, value, name, trigger, errors}}
              />
            )}
          />
          <Button label="Próximo" variant="primary" />
        </Spacing>
      </Distribution>
    </Div>
  );
};
