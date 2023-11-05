import * as React from 'react';
import {Div} from '~/components/Atomics';
import S from '~/pages/AuthNavigator/Register/Register.styles';
import {useRegister} from '~/pages/AuthNavigator/Register/Register.model';
import * as Icon from '~/assets/svgs';

export const FooterButtons = () => {
  const {notNow} = useRegister({});
  return (
    <Div>
      <S.FooterButtons>
        <S.SocialButton onPress={notNow} mr={2}>
          <Icon.Google />
        </S.SocialButton>
        <S.SocialButton onPress={notNow} ml={2}>
          <Icon.Facebook />
        </S.SocialButton>
      </S.FooterButtons>
    </Div>
  );
};
