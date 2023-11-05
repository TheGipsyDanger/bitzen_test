import {IHome} from '~/pages/MainNavigator/Home/Home.types';
import {useForm} from 'react-hook-form';
import {searchSchema} from '~/utils/forms';
import {yupResolver} from '@hookform/resolvers/yup';
import {ISearchForm} from '~/utils/interfaces';
import {useAppSelector} from '~/utils';

export const useHome = (props: IHome.IModelProps): IHome.IModel => {
  const {
    control,
    trigger,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    resolver: yupResolver(searchSchema),
  });

  const user = useAppSelector(state => state.User);

  console.log({user});

  const onSubmit = (params: ISearchForm<string>) => {};

  return {
    control,
    trigger,
    handleSubmit,
    onSubmit,
    errors,
    isValid,
  };
};
