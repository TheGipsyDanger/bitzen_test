import * as React from 'react';
import {Div, Text} from '~/components/Atomics';
import {IProfileItem} from '~/components/ProfileItem/ProfileItem.types';
import * as Icon from '~/assets/svgs';

export const WithAction = ({
  label = '',
  showIcon = true,
  icon,
}: IProfileItem.IViewWithAction) => (
  <Div
    height={56}
    testID={`ProfileItem`}
    flexDirection="row"
    alignItems="center"
    justifyContent="space-between"
  >
    <Div flexDirection="row">
      {icon}
      <Text ml={2} variant="label" color="neutral_800">
        {label}
      </Text>
    </Div>
    {showIcon && <Icon.ChevRight />}
  </Div>
);
