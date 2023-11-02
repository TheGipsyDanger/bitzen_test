import * as React from 'react';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import {withChildren} from '~/utils';
import {RFValue} from 'react-native-responsive-fontsize';
import {metrics} from '../styles/metrics';

const {defaultSpace} = metrics;

export const theme = {
  space: [
    ...[
      0,
      RFValue(4),
      ...Array.from({length: 8}, (_, index) => RFValue((index + 1) * 8)),
    ],
  ],
  fonts: {
    regular: 'Poppins_400Regular',
    medium: 'Poppins_500Medium',
    semibold: 'Poppins_600SemiBold',
  },
  fontSizes: {
    big: RFValue(24),
    normal: RFValue(20),
    small: RFValue(14),
  },
  colors: {
    white: 'white',
    black: 'black',
  },
  raddi: {},
  shadows: {},
};

export type IFont = typeof theme.fonts;
export type IFontSizes = typeof theme.fontSizes;
export type IColors = typeof theme.colors;
export type IRadius = typeof theme.raddi;

export const ThemeProvider = ({children}: withChildren) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);
