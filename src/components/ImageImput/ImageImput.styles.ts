import styled from 'styled-components/native';
import {Div} from '../Atomics';
import {theme} from '~/styles';

export default {
  Container: styled(Div).attrs({})`
    border-width: 1px;
    border-style: dashed;
    border-radius: ${theme.raddi.medium}px;
    border-color: ${theme.colors.neutral_400};
    background-color: ${theme.colors.neutral_200};
    border-style: dashed;
  `,
};
