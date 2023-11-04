import * as React from 'react';
import {Avatar, Distribution, Header, ProfileItem} from '~/components';
import {Div, Spacing, Text} from '~/components/Atomics';
import {IMyInfos} from '~/pages/ProfileNavigator/MyInfos/MyInfos.types';

export const MyInfos = (props: IMyInfos.IView) => (
  <Div flex={1} bg="white" testID={`MyInfos`}>
    <Header.Default label="Meus Dados" />
    <Distribution>
      <Spacing space={6}>
        <Div mt={4} alignSelf="center">
          <Avatar size={80} />
        </Div>
        <Div>
          <ProfileItem.Display
            label="Nome"
            info="Renan Henrique Da Fonte Costa"
          />
          <ProfileItem.Display label="Email" info="renan@email.com" />
        </Div>
      </Spacing>
    </Distribution>
  </Div>
);
