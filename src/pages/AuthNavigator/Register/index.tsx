import * as React from 'react';
import {Header, Button, Distribution} from '~/components';
import {Div, Spacing, Text} from '~/components/Atomics';
import {IRegister} from '~/pages/AuthNavigator/Register/Register.types';
import {useRegister} from '~/pages/AuthNavigator/Register/Register.model';
import {
  Separator,
  HasAccount,
  RegisterForm,
  FooterButtons,
  Terms,
} from '~/pages/AuthNavigator/Register/components';

export const Register = (props: IRegister.IView) => {
  const {handleSubmit, onSubmit, isValid, errors, control, trigger} =
    useRegister(props);

  return (
    <Div flex={1} bg="white" testID={`Register`}>
      <Header />
      <Distribution>
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
          <Terms
            {...{
              errors,
              control,
              trigger,
            }}
          />
          <Separator />
          <FooterButtons />
          <HasAccount />
        </Spacing>
      </Distribution>
    </Div>
  );
};
