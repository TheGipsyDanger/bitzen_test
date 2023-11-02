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
  <Div onPress={onPress} testID={`Button`}>
    <S.Container
      {...rest}
      center
      height={rest.variant === 'link' ? null : 48}
      radius="medium"
    >
      <S.Label variant={rest.variant} testID={`Button:Label`}>
        {isLoading ? <ActivityIndicator /> : label}
      </S.Label>
    </S.Container>
  </Div>
);
