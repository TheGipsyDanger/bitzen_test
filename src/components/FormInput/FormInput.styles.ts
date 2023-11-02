import styled from 'styled-components/native';
import {Div, Text} from '~/components/Atomics';
import {theme} from '~/styles';

export default {
  Content: styled(Div).attrs({
    height: 48,
    px: 3,
    justifyContent: 'center',
    borderWidth: 1,
  })`
    border-radius: ${theme.raddi.medium}px;
  `,
  Error: styled(Text)`
    text-align: center;
    align-self: center;
    font-size: ${theme.fontSizes.small};
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.neutral_500};
  `,
};
