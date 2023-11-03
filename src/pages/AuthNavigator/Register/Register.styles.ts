import styled from 'styled-components/native';
import {Div} from '~/components';
import {theme} from '~/styles';

export default {
  FooterButtons: styled(Div)`
    flex-direction: row;
    height: 44px;
    justify-content: space-between;
  `,
  SocialButton: styled(Div).attrs({
    center: true,
  })`
    flex: 1;
    border-width: 1px;
    border-color: ${theme.colors.neutral_300};
    border-radius: ${theme.raddi.medium}px;
  `,
};
