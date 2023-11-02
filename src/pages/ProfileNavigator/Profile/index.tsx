import * as React from 'react';
import {Div, Text} from '~/components/Atomics';
import {IProfile} from '~/pages/ProfileNavigator/Profile/Profile.types';

export const Profile = (props: IProfile.IView) => (
  <Div flex={1} center testID={`Profile`}>
    <Text>{`Profile`}</Text>
  </Div>
);
