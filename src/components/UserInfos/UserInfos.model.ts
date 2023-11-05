import {IUserInfos} from '~/components/UserInfos/UserInfos.types';
import {useAppSelector} from '~/utils';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const useUserInfos = (
  props: IUserInfos.IModelProps
): IUserInfos.IModel => {
  const {user} = useAppSelector(state => state.User);

  return {
    user,
    top: useSafeAreaInsets().top,
  };
};
