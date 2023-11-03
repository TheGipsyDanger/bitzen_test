import styled from 'styled-components/native';
import {Div} from '~/components/Atomics';
import {theme} from '~/styles';

export default {
  Container: styled(Div).attrs({
    elevation: 5,
  })`
    margin-bottom: ${theme.space[4]}px;
    background-color: ${theme.colors.white};
    border-bottom-width: ${1 / 2}px;
    border-color: ${theme.colors.neutral_500};
  `,
  InternalContainer: styled(Div)``,
};
