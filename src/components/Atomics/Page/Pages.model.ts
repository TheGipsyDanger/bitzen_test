import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {IPage} from '~/components/Atomics/Page/Page.types';
import {goBack} from '~/utils/navigator';

export const usePage = (): IPage.IModel => {
  return {
    top: useSafeAreaInsets().top,
  };
};
