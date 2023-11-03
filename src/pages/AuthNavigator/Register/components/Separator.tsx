import * as React from 'react';
import {Div, Text} from '~/components/Atomics';

export const Separator = () => (
  <Div flexDirection="row" center>
    <Div flex={1} height={1} bg="neutral_300" />
    <Div flex={2} center>
      <Text variant="infos" color="neutral_600">{`ou se cadastre com`}</Text>
    </Div>
    <Div flex={1} height={1} bg="neutral_300" />
  </Div>
);
