import * as React from 'react';
import {Avatar, Distribution, Header, ProfileItem} from '~/components';
import {Div, Spacing} from '~/components/Atomics';
import {IMyInfos} from '~/pages/ProfileNavigator/MyInfos/MyInfos.types';
import {useMyInfos} from '~/pages/ProfileNavigator/MyInfos/MyInfos.model';

export const MyInfos = (props: IMyInfos.IView) => {
  const {user} = useMyInfos({});
  return (
    <Div flex={1} bg="white" testID={`MyInfos`}>
      <Header.Default label="Meus Dados" />
      <Distribution>
        <Spacing space={6}>
          <Div mt={4} alignSelf="center">
            <Avatar size={80} image={user.profile_photo_url} />
          </Div>
          <Div>
            <ProfileItem.Display label="Nome" info={user.name} />
            <ProfileItem.Display label="Email" info={user.email} />
          </Div>
        </Spacing>
      </Distribution>
    </Div>
  );
};
