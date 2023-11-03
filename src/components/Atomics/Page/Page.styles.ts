import styled from 'styled-components/native';
import {KeyboardAvoidingView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {color, BackgroundColorProps, backgroundColor} from 'styled-system';
import {Wrapped as Div} from '../Wrapped';

export default {
  SafeAreaStyled: styled(SafeAreaView)<BackgroundColorProps>`
    ${color};
    ${backgroundColor};
    flex: 1;
  `,
  Container: styled(Div)<BackgroundColorProps>`
    ${color};
    ${backgroundColor};
    flex: 1;
  `,
  KeyboardAvoidStyled: styled(KeyboardAvoidingView)`
    flex: 1;
  `,
};
