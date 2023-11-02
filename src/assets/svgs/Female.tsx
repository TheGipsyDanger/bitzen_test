import * as React from 'react';
import {memo} from 'react';
import {SvgXml} from 'react-native-svg';
import {ISvgIcons} from '~/utils';

const xml = (
  color: string
) => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M19.5 8.99991C19.5 7.54853 19.0788 6.12833 18.2877 4.91156C17.4965 3.69479 16.3692 2.73372 15.0427 2.14492C13.7161 1.55611 12.2472 1.36486 10.814 1.59436C9.38092 1.82387 8.04518 2.46427 6.96881 3.43789C5.89245 4.41151 5.1217 5.67653 4.75005 7.07952C4.37841 8.48251 4.42182 9.96319 4.87504 11.342C5.32825 12.7208 6.1718 13.9385 7.30336 14.8474C8.43493 15.7562 9.8059 16.3173 11.25 16.4624V18.7499H8.25C8.05109 18.7499 7.86032 18.8289 7.71967 18.9696C7.57902 19.1102 7.5 19.301 7.5 19.4999C7.5 19.6988 7.57902 19.8896 7.71967 20.0302C7.86032 20.1709 8.05109 20.2499 8.25 20.2499H11.25V22.4999C11.25 22.6988 11.329 22.8896 11.4697 23.0302C11.6103 23.1709 11.8011 23.2499 12 23.2499C12.1989 23.2499 12.3897 23.1709 12.5303 23.0302C12.671 22.8896 12.75 22.6988 12.75 22.4999V20.2499H15.75C15.9489 20.2499 16.1397 20.1709 16.2803 20.0302C16.421 19.8896 16.5 19.6988 16.5 19.4999C16.5 19.301 16.421 19.1102 16.2803 18.9696C16.1397 18.8289 15.9489 18.7499 15.75 18.7499H12.75V16.4624C14.5991 16.2743 16.3127 15.4071 17.5595 14.0287C18.8063 12.6503 19.4977 10.8585 19.5 8.99991ZM6 8.99991C6 7.81322 6.35189 6.65318 7.01118 5.66649C7.67047 4.67979 8.60754 3.91076 9.7039 3.45663C10.8003 3.00251 12.0067 2.88369 13.1705 3.1152C14.3344 3.34671 15.4035 3.91815 16.2426 4.75727C17.0818 5.59638 17.6532 6.66548 17.8847 7.82937C18.1162 8.99325 17.9974 10.1997 17.5433 11.296C17.0892 12.3924 16.3201 13.3294 15.3334 13.9887C14.3467 14.648 13.1867 14.9999 12 14.9999C10.4092 14.9982 8.88412 14.3655 7.75928 13.2406C6.63444 12.1158 6.00174 10.5907 6 8.99991Z" fill=${color}/>
</svg>`;

export const Female = memo(
  ({width = '24', height = '24', color = 'black'}: ISvgIcons) => (
    <SvgXml width={width} height={height} xml={xml(color)} />
  )
);
