import styled from 'styled-components/native';
import {Wrapped as Div} from '~/components/Atomics/Wrapped';
import {theme} from '~/styles';

export default {
  Container: styled(Div).attrs({
    center: true,
  })`
    flex: 1;
    border-width: 1px;
    border-color: ${theme.colors.neutral_300};
    border-radius: ${theme.raddi.light}px;
  `,
};
