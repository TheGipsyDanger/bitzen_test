import styled from 'styled-components/native';
import {variant} from 'styled-system';
import {Div, Text} from '~/components/Atomics';
import {theme} from '~/styles/theme';

export default {
  Container: styled(Div)(
    variant({
      variants: {
        primary: {
          backgroundColor: theme.colors.blue_black,
        },
        link: {
          backgroundColor: theme.colors['transparent'],
        },
      },
    })
  ),
  Label: styled(Text)(
    variant({
      variants: {
        primary: {
          color: theme.colors.white,
          fontFamily: theme.fonts.semibold,
          fontSize: theme.fontSizes.small,
        },
        link: {
          color: theme.colors.blue_black,
          fontFamily: theme.fonts.semibold,
          fontSize: theme.fontSizes.small,
        },
      },
    })
  ),
};
