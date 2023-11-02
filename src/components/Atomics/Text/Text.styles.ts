import styled from 'styled-components/native';
import {css} from 'styled-components';
import {Text as TextBase} from 'react-native';
import {color, space, border, typography, variant} from 'styled-system';
import {theme, IFont, IFontSizes} from '~/styles/theme';

const Text = styled(TextBase)`
  ${space};
  ${color};
  ${typography};
  ${border};

  ${({textTransform}) =>
    textTransform &&
    css`
      text-transform: ${textTransform};
    `}

  ${({textDecoration}) =>
    textDecoration &&
    css`
      text-decoration: ${textDecoration};
    `}

    font-family: ${({font}: {font: keyof IFont}) =>
    theme.fonts[font] || 'Avenir'};

  font-size: ${({size}: {size: keyof IFontSizes}) =>
    Number(theme.fontSizes[size])}px;
`;

export default {
  Text: styled(Text)(
    variant({
      variants: {
        title: {
          fontFamily: theme.fonts.medium,
          fontSize: theme.fontSizes.normal,
        },
        label: {
          fontFamily: theme.fonts.regular,
          fontSize: theme.fontSizes.small,
        },
        labelBold: {
          fontFamily: theme.fonts.semibold,
          fontSize: theme.fontSizes.small,
        },
        infos: {
          fontFamily: theme.fonts.regular,
          fontSize: theme.fontSizes.small,
        },
        name: {
          fontFamily: theme.fonts.semibold,
          fontSize: theme.fontSizes.big,
        },
      },
    })
  ),
};
