import * as React from 'react';
import {memo} from 'react';
import {SvgXml} from 'react-native-svg';
import {ISvgIcons} from '~/utils';

const xml = (
  color: string
) => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M8.25 4.5L15.75 12L8.25 19.5" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export const ChevRight = memo(
  ({width = '24', height = '24', color = 'black'}: ISvgIcons) => (
    <SvgXml width={width} height={height} xml={xml(color)} />
  )
);
