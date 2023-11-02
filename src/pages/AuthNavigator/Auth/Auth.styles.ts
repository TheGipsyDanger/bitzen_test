import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {Div, Text} from '~/components/Atomics';
import {theme} from '~/styles';

export default {
  Header: styled(SafeAreaView)`
    flex: 1;
    align-items: center;
    justify-content: center;
  `,
  Circle: styled(Div)`
    width: 106px;
    height: 106px;
    align-self: center;
    background-color: ${theme.colors.white};
  `,
  Content: styled(Div)`
    border-top-right-radius: ${theme.raddi.normal}px;
    border-top-left-radius: ${theme.raddi.normal}px;
    background-color: ${theme.colors.white};
  `,
  Title: styled(Text).attrs({
    variant: 'title',
  })`
    text-align: center;
  `,
};
