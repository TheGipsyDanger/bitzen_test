import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {IHeader} from '~/components/Header/Header.types';
import {AppRoutes} from '~/routes/routeConfig';
import {goBack, navigate} from '~/utils/navigator';

export const useHeader = (props: IHeader.IModelProps): IHeader.IModel => {
  const goToAddPets = () => navigate(AppRoutes.RegisterPet);
  return {
    ...props,
    goBack,
    goToAddPets,
    top: useSafeAreaInsets().top,
  };
};
