import {IProfile} from '~/pages/ProfileNavigator/Profile/Profile.types';
import {AppRoutes} from '~/routes/routeConfig';
import {navigate} from '~/utils/navigator';

export const useProfile = (props: IProfile.IModelProps): IProfile.IModel => {
  const goToMyInfos = () => navigate(AppRoutes.MyInfos);

  const loggout = () => {
    navigate(AppRoutes.AuthNavigator);
  };
  return {
    goToMyInfos,
    loggout,
  };
};
