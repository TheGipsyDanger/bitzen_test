import {IMyInfos} from '~/pages/ProfileNavigator/MyInfos/MyInfos.types';
import {useAppSelector} from '~/utils';
export const useMyInfos = (props: IMyInfos.IModelProps): IMyInfos.IModel => {
  const {user} = useAppSelector(state => state.User);
  return {
    user,
  };
};
