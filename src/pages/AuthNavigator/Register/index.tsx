import * as React from 'react';
import {Header, Button, FormInput} from '~/components';
import {Div, Spacing, Text, Screen} from '~/components/Atomics';
import {IRegister} from '~/pages/AuthNavigator/Register/Register.types';
import {useRegister} from '~/pages/AuthNavigator/Register/Register.model';
import {
  Separator,
  HasAccount,
  RegisterForm,
  FooterButtons,
} from '~/pages/AuthNavigator/Register/components';

export const Register = (props: IRegister.IView) => {
  const {handleSubmit, onSubmit, isValid, errors, control, trigger} =
    useRegister(props);

  return (
    <Div flex={1} bg="off_white" testID={`Register`}>
      <Header />
      <Screen.Default bg="white">
        <Div flex={1} bg="white" px={4}>
          <Spacing space={4}>
            <Text variant="title">{`Cadastre-se gratuitamente`}</Text>
            <RegisterForm
              {...{
                errors,
                control,
                trigger,
              }}
            />
            <Button
              onPress={handleSubmit(onSubmit)}
              label="Criar conta"
              variant={isValid ? 'primary' : 'disable'}
            />
            <Separator />
            <FooterButtons />
            <HasAccount />
          </Spacing>
        </Div>
      </Screen.Default>
    </Div>
  );
};
