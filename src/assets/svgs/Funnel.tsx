import * as React from 'react';
import {memo} from 'react';
import {SvgXml} from 'react-native-svg';
import {ISvgIcons} from '~/utils';

const xml = (
  color: string
) => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 3C14.755 3 17.455 3.232 20.083 3.678C20.616 3.768 21 4.234 21 4.774V5.818C21 6.11348 20.9418 6.40606 20.8287 6.67904C20.7157 6.95203 20.5499 7.20007 20.341 7.409L14.909 12.841C14.7001 13.0499 14.5343 13.298 14.4213 13.571C14.3082 13.8439 14.25 14.1365 14.25 14.432V17.359C14.2501 17.777 14.1337 18.1867 13.914 18.5423C13.6943 18.8978 13.3799 19.1851 13.006 19.372L9.75 21V14.432C9.75 14.1365 9.69181 13.8439 9.57874 13.571C9.46566 13.298 9.29993 13.0499 9.091 12.841L3.659 7.409C3.45007 7.20007 3.28434 6.95203 3.17126 6.67904C3.05819 6.40606 3 6.11348 3 5.818V4.774C3 4.234 3.384 3.768 3.917 3.678C6.58757 3.22586 9.29143 2.99906 12 3Z" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export const Funnel = memo(
  ({width = '24', height = '24', color = 'black'}: ISvgIcons) => (
    <SvgXml width={width} height={height} xml={xml(color)} />
  )
);
