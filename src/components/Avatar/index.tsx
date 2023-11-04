import * as React from 'react';
import {Image} from 'react-native';
import {Div} from '~/components/Atomics';
import {IAvatar} from '~/components/Avatar/Avatar.types';

export const Avatar = ({size = 64}: IAvatar.IView) => (
  <Div
    height={size}
    width={size}
    radius="circle"
    overflow="hidden"
    testID={`Avatar`}
  >
    <Image
      style={{
        width: size,
        height: size,
      }}
      source={{
        uri: 'https://www.petz.com.br/blog//wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg',
      }}
    />
  </Div>
);
