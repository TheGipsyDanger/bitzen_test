import styled from 'styled-components/native';
import {Div, Text} from '~/components/Atomics';
import {theme} from '~/styles';

export default {
  Content: styled(Div).attrs({
    height: 55,
    px: 3,
    justifyContent: 'center',
    borderWidth: 1,
  })`
    border-radius: 5px;
    border: 1px solid ${theme.colors.neutral_500};
  `,
  Error: styled(Text)`
    text-align: center;
    align-self: center;
    font-size: ${theme.fontSizes.small};
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.neutral_500};
  `,
};
