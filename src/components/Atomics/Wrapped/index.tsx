import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {IWrapped} from '~/components/Atomics/Wrapped/Wrapped.types';
import S from '~/components/Atomics/Wrapped/Wrapped.styles';
import {IColors, theme} from '~/styles';

export const Wrapped = ({
  children,
  bg = 'transparent',
  ...props
}: IWrapped.IView) => {
  const as = props.onPress && TouchableOpacity;
  return (
    <S.Wrapped {...{as}} {...props} bg={theme.colors[bg as keyof IColors]}>
      {children}
    </S.Wrapped>
  );
};
