import * as React from 'react';
import {memo} from 'react';
import {SvgXml} from 'react-native-svg';
import {ISvgIcons} from '~/utils';

const xml = (
  color: string
) => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M21 8.25C21 5.765 18.901 3.75 16.312 3.75C14.377 3.75 12.715 4.876 12 6.483C11.285 4.876 9.623 3.75 7.687 3.75C5.1 3.75 3 5.765 3 8.25C3 15.47 12 20.25 12 20.25C12 20.25 21 15.47 21 8.25Z" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export const Heart = memo(
  ({width = '24', height = '24', color = 'black'}: ISvgIcons) => (
    <SvgXml width={width} height={height} xml={xml(color)} />
  )
);
