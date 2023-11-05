import * as React from 'react';
import {Image} from 'react-native';
import {Div} from '~/components/Atomics';
import {IAvatar} from '~/components/Avatar/Avatar.types';

export const Avatar = ({size = 64, image}: IAvatar.IView) => (
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
        uri: image,
      }}
    />
  </Div>
);
