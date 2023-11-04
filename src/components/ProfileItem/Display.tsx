import * as React from 'react';
import {Div, Text} from '~/components/Atomics';
import {IProfileItem} from '~/components/ProfileItem/ProfileItem.types';
import * as Icon from '~/assets/svgs';

export const Display = ({label = '', info = ''}: IProfileItem.IViewDisplay) => (
  <Div
    height={64}
    testID={`ProfileItem`}
    justifyContent="center"
    borderBottomWidth={1}
    borderColor="neutral_200"
  >
    <Div flexDirection="row" justifyContent="space-between">
      <Text ml={2} variant="label" color="neutral_500">
        {label}
      </Text>
      <Text ml={2} variant="label" color="neutral_800">
        {info}
      </Text>
    </Div>
  </Div>
);
