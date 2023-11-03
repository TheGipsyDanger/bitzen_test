import * as React from 'react';
import {ActivityIndicator} from 'react-native';
import {Div} from '~/components/Atomics';
import {IButton} from '~/components/Button/Button.types';
import S from '~/components/Button/Button.styles';

export const Button = ({
  onPress,
  label = 'button',
  isLoading = false,
  ...rest
}: IButton.IView) => (
  <Div onPress={rest.variant === 'disable' ? null : onPress} testID={`Button`}>
    <S.Container
      {...rest}
      center
      height={rest.variant === 'link' ? null : 48}
      radius="medium"
    >
      {isLoading ? (
        <ActivityIndicator color="white" />
      ) : (
        <S.Label variant={rest.variant} testID={`Button:Label`}>
          {label}
        </S.Label>
      )}
    </S.Container>
  </Div>
);
