import styled from 'styled-components/native';
import {Div} from '~/components';
import {theme} from '~/styles';

export default {
  Container: styled.View``,
  Content: styled(Div)`
    border-top-right-radius: ${theme.raddi.double}px;
    border-top-left-radius: ${theme.raddi.double}px;
  `,
};
