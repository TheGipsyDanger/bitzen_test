import * as React from 'react';
import {Header, Button, FormInput} from '~/components';
import {Div, Spacing, Text} from '~/components/Atomics';
import {IRegister} from '~/pages/AuthNavigator/Register/Register.types';
import {useRegister} from '~/pages/AuthNavigator/Register/Register.model';
import {Controller} from 'react-hook-form';

export const Register = (props: IRegister.IView) => {
  const {control, trigger, handleSubmit, onSubmit, errors, isValid} =
    useRegister(props);

  return (
    <Div flex={1} bg="off_white" testID={`Register`}>
      <Header />
      <Div flex={1} px={4}>
        <Spacing space={4}>
          <Text variant="title">{`Cadastre-se gratuitamente`}</Text>
          <Controller
            control={control}
            name="name"
            defaultValue=""
            render={({field: {onChange, onBlur, value, name}}) => (
              <FormInput
                placeholder="Seu nome*"
                {...{onChange, onBlur, value, name, trigger, errors}}
              />
            )}
          />
          <Controller
            control={control}
            name="document"
            defaultValue=""
            render={({field: {onChange, onBlur, value, name}}) => (
              <FormInput
                placeholder="CPF*"
                {...{onChange, onBlur, value, name, trigger, errors}}
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            defaultValue=""
            render={({field: {onChange, onBlur, value, name}}) => (
              <FormInput
                placeholder="E-mail*"
                {...{onChange, onBlur, value, name, trigger, errors}}
              />
            )}
          />
          <Controller
            control={control}
            name="phone"
            defaultValue=""
            render={({field: {onChange, onBlur, value, name}}) => (
              <FormInput
                placeholder="Telefone*"
                {...{onChange, onBlur, value, name, trigger, errors}}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            defaultValue=""
            render={({field: {onChange, onBlur, value, name}}) => (
              <FormInput
                placeholder="Senha*"
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
                placeholder="Confirme senha*"
                {...{onChange, onBlur, value, name, trigger, errors}}
              />
            )}
          />
          <Button label="Criar conta" variant="primary" />
        </Spacing>
      </Div>
    </Div>
  );
};
