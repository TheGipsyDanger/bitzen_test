import styled from 'styled-components/native';
import {Div} from '~/components';
import {theme} from '~/styles';

export default {
  Container: styled.View``,
  Content: styled(Div).attrs({
    shadowColor: '#000000',
    shadowOffset: {width: -6, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  })`
    border-top-right-radius: ${theme.raddi.double}px;
    border-top-left-radius: ${theme.raddi.double}px;
  `,
};
