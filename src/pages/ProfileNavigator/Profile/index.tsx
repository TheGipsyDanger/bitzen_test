import * as React from 'react';
import {Div} from '~/components/Atomics';
import {UserInfos, ProfileItem} from '~/components';
import {IProfile} from '~/pages/ProfileNavigator/Profile/Profile.types';
import {useProfile} from '~/pages/ProfileNavigator/Profile/Profile.model';
import S from '~/pages/ProfileNavigator/Profile/Profile.styles';
import {useDefineContentHeight} from '~/utils/hooks';
import * as Icon from '~/assets/svgs';

export const Profile = (props: IProfile.IView) => {
  const {goToMyInfos, loggout} = useProfile(props);
  const {withPercentage} = useDefineContentHeight();
  return (
    <Div flex={1} bg="neutral_100" testID={`Profile`}>
      <Div flex={1} px={4} pt={4}>
        <UserInfos />
      </Div>
      <S.Content bg="white" height={withPercentage(67)} px={4}>
        <Div mt={6}>
          <Div onPress={goToMyInfos}>
            <ProfileItem.WithAction
              label="Meus dados"
              icon={<Icon.User width="20" height="20" />}
            />
          </Div>
          <Div height={1} bg="neutral_300" />
          <Div onPress={loggout}>
            <ProfileItem.WithAction
              showIcon={false}
              label="Sair do aplicativo"
              icon={<Icon.Logout width="20" height="20" />}
            />
          </Div>
        </Div>
      </S.Content>
    </Div>
  );
};
