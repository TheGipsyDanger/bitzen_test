import * as React from 'react';
import {Div, Text} from '~/components/Atomics';
import {ImageBackground} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {ILinearImage} from '~/components/LinearImage/LinearImage.types';

export const LinearImage = ({
  url,
  height = 344,
  to = 'black',
  original = 'transparent',
  name = '',
}: ILinearImage.IView) => (
  <Div radius="medium" overflow="hidden" mb={4}>
    <ImageBackground
      style={{width: '100%', height}}
      resizeMode="cover"
      source={{
        uri: url,
      }}
    >
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1.9}}
        colors={[original, to]}
        style={{flex: 1, justifyContent: 'flex-end'}}
      >
        <Div px={4} pb={4}>
          <Text variant="name" color="white">
            {name}
          </Text>
        </Div>
      </LinearGradient>
    </ImageBackground>
  </Div>
);
