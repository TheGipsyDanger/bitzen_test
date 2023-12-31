import * as React from 'react';
import {memo} from 'react';
import {SvgXml} from 'react-native-svg';
import {ISvgIcons} from '~/utils';

const xml = (
  color: string
) => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M5 8.46154C5 14.8338 10.1662 20 16.5385 20H18.2692C18.7283 20 19.1685 19.8177 19.4931 19.4931C19.8177 19.1685 20 18.7283 20 18.2692V17.2138C20 16.8169 19.73 16.4708 19.3446 16.3746L15.9423 15.5238C15.6038 15.4392 15.2485 15.5662 15.04 15.8446L14.2938 16.8392C14.0769 17.1285 13.7023 17.2562 13.3631 17.1315C12.1038 16.6686 10.9601 15.9374 10.0114 14.9886C9.06262 14.0399 8.33144 12.8962 7.86846 11.6369C7.74385 11.2977 7.87154 10.9231 8.16077 10.7062L9.15538 9.96C9.43462 9.75154 9.56077 9.39538 9.47615 9.05769L8.62538 5.65538C8.57857 5.46823 8.47055 5.30208 8.3185 5.18334C8.16645 5.06459 7.97908 5.00006 7.78615 5H6.73077C6.27174 5 5.83151 5.18235 5.50693 5.50693C5.18235 5.83151 5 6.27174 5 6.73077V8.46154Z" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export const Phone = memo(
  ({width = '24', height = '24', color = 'black'}: ISvgIcons) => (
    <SvgXml width={width} height={height} xml={xml(color)} />
  )
);
