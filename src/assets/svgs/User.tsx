import * as React from 'react';
import {memo} from 'react';
import {SvgXml} from 'react-native-svg';
import {ISvgIcons} from '~/utils';

const xml = (
  color: string
) => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M16.249 5.75C16.249 7.82107 14.5701 9.5 12.499 9.5C10.4279 9.5 8.749 7.82107 8.749 5.75C8.749 3.67893 10.4279 2 12.499 2C14.5701 2 16.249 3.67893 16.249 5.75ZM5 19.868C4.999 15.7259 8.35687 12.368 12.499 12.368C16.6411 12.368 19.999 15.7259 19.999 19.868C17.6461 20.9469 15.0875 21.5037 12.499 21.5C9.823 21.5 7.283 20.916 5 19.868Z" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export const User = memo(
  ({width = '24', height = '24', color = 'black'}: ISvgIcons) => (
    <SvgXml width={width} height={height} xml={xml(color)} />
  )
);
