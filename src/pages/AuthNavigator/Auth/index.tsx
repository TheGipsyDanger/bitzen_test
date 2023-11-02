import * as React from 'react';
import {Controller} from 'react-hook-form';
import {Div, Spacing} from '~/components/Atomics';
import {Button, FormInput} from '~/components';
import {Pet} from '~/assets/svgs';
import {IAuth} from '~/pages/AuthNavigator/Auth/Auth.types';
import {useDefineContentHeight} from '~/utils/hooks';
import {useAuth} from '~/pages/AuthNavigator/Auth/Auth.model';
import S from '~/pages/AuthNavigator/Auth/Auth.styles';

export const Auth = (props: IAuth.IView) => {
  const {
    control,
    handleSubmit,
    errors,
    trigger,
    isValid,
    onSubmit,
    goToResetPassword,
  } = useAuth();

  const {withPercentage} = useDefineContentHeight();

  return (
    <Div flex={1} bg="ocean_blue" testID={`Auth`}>
      <S.Header>
        <S.Circle mb={3} center radius="circle">
          <Pet width="56" height="56" />
        </S.Circle>
        <S.Title color="white">{`Bitzen Pet`}</S.Title>
      </S.Header>
      <S.Content bg="white" height={withPercentage(67)} px={4}>
        <Div mt={8} mb={6}>
          <S.Title>{`Que bom te ver por aqui!`}</S.Title>
        </Div>
        <Spacing space={4}>
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
          <Controller
            control={control}
            name="password"
            defaultValue=""
            render={({field: {onChange, onBlur, value, name}}) => (
              <FormInput
                secureTextEntry={true}
                placeholder="Senha"
                {...{onChange, onBlur, value, name, trigger, errors}}
              />
            )}
          />
          <Button
            onPress={goToResetPassword}
            label="Esqueceu sua senha?"
            variant="link"
            alignSelf="flex-end"
          />
          <Button onPress={onSubmit} label="Entrar" variant="primary" />
        </Spacing>
      </S.Content>
    </Div>
  );
};
