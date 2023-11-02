import * as React from 'react';
import {Div, Text} from '~/components/Atomics';
import {Pet} from '~/assets/svgs';
import {IAuth} from '~/pages/AuthNavigator/Auth/Auth.types';
import {metrics} from '~/styles';
import {useDefineContentHeight} from '~/utils/hooks';
import S from '~/pages/AuthNavigator/Auth/Auth.styles';

export const Auth = (props: IAuth.IView) => {
  const {withPercentage} = useDefineContentHeight();
  return (
    <Div flex={1} bg="ocean_blue" testID={`Auth`}>
      <S.Header>
        <S.Circle mb={3} center radius="circle">
          <Pet width="56" height="56" />
        </S.Circle>
        <S.Title color="white">{`Bitzen Pet`}</S.Title>
      </S.Header>
      <S.Content bg="white" height={withPercentage(68)}></S.Content>
    </Div>
  );
};
