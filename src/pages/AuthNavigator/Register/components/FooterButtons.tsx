import * as React from 'react';
import {Div} from '~/components/Atomics';
import S from '~/pages/AuthNavigator/Register/Register.styles';
import * as Icon from '~/assets/svgs';

export const FooterButtons = () => (
  <Div>
    <S.FooterButtons>
      <S.SocialButton mr={2}>
        <Icon.Google />
      </S.SocialButton>
      <S.SocialButton ml={2}>
        <Icon.Facebook />
      </S.SocialButton>
    </S.FooterButtons>
  </Div>
);
