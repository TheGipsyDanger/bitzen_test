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
    transparent: 'transparent',
    black: '#000000',
    white: '#FFFFFF',
    background: '#F9F9F9',
    success: '#48D670',
    error: '#DC3545',
    ocean_blue: '#00B8C4',
    neutral_100: '#F9F9F9',
    neutral_400: '#B3B3B3',
    neutral_500: '#8C8C8',
    neutral_800: '#404040',
    blue_black: '#183E4B',
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
