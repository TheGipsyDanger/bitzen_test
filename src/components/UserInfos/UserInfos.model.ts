import {IUserInfos} from '~/components/UserInfos/UserInfos.types';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const useUserInfos = (
  props: IUserInfos.IModelProps
): IUserInfos.IModel => {
  return {
    top: useSafeAreaInsets().top,
  };
};
