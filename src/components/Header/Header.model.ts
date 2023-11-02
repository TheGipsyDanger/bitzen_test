import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {IHeader} from '~/components/Header/Header.types';
import {goBack} from '~/utils/navigator';

export const useHeader = (props: IHeader.IModelProps): IHeader.IModel => {
  return {
    ...props,
    goBack,
    top: useSafeAreaInsets().top,
  };
};
