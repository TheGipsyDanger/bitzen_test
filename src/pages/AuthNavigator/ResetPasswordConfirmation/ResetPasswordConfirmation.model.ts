import {IResetPasswordConfirmation} from '~/pages/AuthNavigator/ResetPasswordConfirmation/ResetPasswordConfirmation.types';
import {AppRoutes} from '~/routes/routeConfig';
import {navigate} from '~/utils/navigator';

export const useResetPasswordConfirmation = (
  props: IResetPasswordConfirmation.IModelProps
): IResetPasswordConfirmation.IModel => {
  const backToLogin = () => navigate(AppRoutes.Auth);
  return {
    backToLogin,
  };
};
