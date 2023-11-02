import * as React from 'react';
import {memo} from 'react';
import {SvgXml} from 'react-native-svg';
import {ISvgIcons} from '~/utils';

const xml = (
  color: string
) => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M22.0613 6.87821L17.1216 1.93946C16.9823 1.80014 16.8169 1.68962 16.6349 1.61421C16.4529 1.53881 16.2578 1.5 16.0608 1.5C15.8638 1.5 15.6687 1.53881 15.4867 1.61421C15.3047 1.68962 15.1393 1.80014 15 1.93946L1.93876 14.9998C1.79943 15.1391 1.68892 15.3044 1.61351 15.4865C1.53811 15.6685 1.4993 15.8635 1.4993 16.0606C1.4993 16.2576 1.53811 16.4526 1.61351 16.6347C1.68892 16.8167 1.79943 16.982 1.93876 17.1213L6.87845 22.0601C7.01774 22.1994 7.18311 22.3099 7.36512 22.3853C7.54713 22.4607 7.74222 22.4995 7.93923 22.4995C8.13624 22.4995 8.33132 22.4607 8.51333 22.3853C8.69534 22.3099 8.86072 22.1994 9.00001 22.0601L22.0613 8.99977C22.2006 8.86048 22.3111 8.69511 22.3865 8.5131C22.4619 8.33109 22.5007 8.136 22.5007 7.93899C22.5007 7.74198 22.4619 7.5469 22.3865 7.36489C22.3111 7.18288 22.2006 7.0175 22.0613 6.87821ZM7.93876 20.9998L3.00001 16.0601L6.00001 13.0601L8.46938 15.5304C8.53907 15.6001 8.62179 15.6554 8.71284 15.6931C8.80388 15.7308 8.90146 15.7502 9.00001 15.7502C9.09856 15.7502 9.19614 15.7308 9.28718 15.6931C9.37823 15.6554 9.46095 15.6001 9.53063 15.5304C9.60032 15.4607 9.65559 15.378 9.69331 15.2869C9.73102 15.1959 9.75043 15.0983 9.75043 14.9998C9.75043 14.9012 9.73102 14.8036 9.69331 14.7126C9.65559 14.6216 9.60032 14.5388 9.53063 14.4691L7.06032 11.9998L9.00001 10.0601L11.4694 12.5304C11.6101 12.6711 11.801 12.7502 12 12.7502C12.199 12.7502 12.3899 12.6711 12.5306 12.5304C12.6714 12.3897 12.7504 12.1988 12.7504 11.9998C12.7504 11.8008 12.6714 11.6099 12.5306 11.4691L10.0603 8.99977L12 7.06009L14.4694 9.5304C14.5391 9.60008 14.6218 9.65536 14.7128 9.69307C14.8039 9.73078 14.9015 9.75019 15 9.75019C15.0986 9.75019 15.1961 9.73078 15.2872 9.69307C15.3782 9.65536 15.461 9.60008 15.5306 9.5304C15.6003 9.46072 15.6556 9.37799 15.6933 9.28695C15.731 9.1959 15.7504 9.09832 15.7504 8.99977C15.7504 8.90123 15.731 8.80365 15.6933 8.7126C15.6556 8.62156 15.6003 8.53883 15.5306 8.46915L13.0603 5.99977L16.0603 2.99977L21 7.93946L7.93876 20.9998Z" fill=${color}/>
</svg>
`;

export const Ruler = memo(
  ({width = '24', height = '24', color = 'black'}: ISvgIcons) => (
    <SvgXml width={width} height={height} xml={xml(color)} />
  )
);