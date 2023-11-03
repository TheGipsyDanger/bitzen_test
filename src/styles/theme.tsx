import * as React from 'react';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import {withChildren} from '~/utils';
import {RFValue} from 'react-native-responsive-fontsize';

export const theme = {
  space: [0, 4, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80],
  fonts: {
    regular: 'Poppins_400Regular',
    medium: 'Poppins_500Medium',
    semibold: 'Poppins_600SemiBold',
  },
  fontSizes: {
    big: 24,
    normal: 20,
    small: 14,
  },
  colors: {
    transparent: 'transparent',
    black: '#000000',
    white: '#FFFFFF',
    off_white: '#FCFCFC',
    background: '#D8D8D8',
    success: '#48D670',
    error: '#DC3545',
    ocean_blue: '#00B8C4',
    neutral_100: '#F9F9F9',
    neutral_400: '#B3B3B3',
    neutral_500: '#8C8C8C',
    neutral_800: '#404040',
    neutral_900: '#262626',
    blue_black: '#183E4B',
  },
  raddi: {
    light: RFValue(4),
    medium: RFValue(8),
    normal: RFValue(12),
    circle: 100,
  },
  shadows: {},
};

export type IFont = typeof theme.fonts;
export type IFontSizes = typeof theme.fontSizes;
export type IColors = typeof theme.colors;
export type IRadius = typeof theme.raddi;

export const ThemeProvider = ({children}: withChildren) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);
