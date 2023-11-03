import * as React from 'react';
import {Spacing} from '~/components/Atomics';
import {FormInput} from '~/components';
import {IRegister} from '~/pages/AuthNavigator/Register/Register.types';
import {Controller} from 'react-hook-form';

export const RegisterForm = ({
  control,
  trigger,
  errors,
}: IRegister.IRegisterFormView) => (
  <Spacing space={4}>
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
  </Spacing>
);
