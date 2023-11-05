import * as React from 'react';
import {Div, Text} from '~/components/Atomics';
import {Avatar} from '~/components/Avatar';
import {IUserInfos} from '~/components/UserInfos/UserInfos.types';
import {useUserInfos} from '~/components/UserInfos/UserInfos.model';

export const UserInfos = (props: IUserInfos.IView) => {
  const {top, user} = useUserInfos(props);
  return (
    <>
      <Div height={top} />
      <Div flexDirection="row" alignContent="center" testID={`UserInfos`}>
        <Avatar image={user.profile_photo_url} />
        <Div ml={2} justifyContent="center">
          <Text variant="title">{user.name}</Text>
          <Text variant="infos" color="neutral_500">
            {`Rio de Janeiro, RJ`}
          </Text>
        </Div>
      </Div>
    </>
  );
};
