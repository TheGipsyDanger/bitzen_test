import styled from 'styled-components/native';
import {Div} from '~/components';
import {theme} from '~/styles';

export default {
  Container: styled(Div).attrs({
    shadowColor: '#000000',
    shadowOffset: {width: -1, height: -1},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  })`
    padding: ${theme.space[5]}px ${theme.space[4]}px;
    border-radius: ${theme.raddi.normal}px;
    background-color: ${theme.colors.white};
  `,
};
