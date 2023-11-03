import styled from 'styled-components/native';
import {theme} from '~/styles';

export default {
  Container: styled.View``,
  Cell: {
    width: 64,
    height: 64,
    lineHeight: 64,
    fontSize: 14,
    borderWidth: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.colors.neutral_400,
  },
  FocusCell: {
    borderColor: theme.colors.blue_black,
  },
};
