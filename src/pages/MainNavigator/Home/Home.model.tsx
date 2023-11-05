import * as React from 'react';
import {useCallback} from 'react';
import {ListRenderItemInfo} from 'react-native';
import {IHome} from '~/pages/MainNavigator/Home/Home.types';
import {useForm} from 'react-hook-form';
import {searchSchema} from '~/utils/forms';
import {yupResolver} from '@hookform/resolvers/yup';
import {IPetListItem, ISearchForm} from '~/utils/interfaces';
import {useAppSelector} from '~/utils';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {petListActions, getPetActions} from '~/redux/actions';
import {LinearImage, Div} from '~/components';
import escapeRegExp from 'escape-string-regexp';

export const useHome = (props: IHome.IModelProps): IHome.IModel => {
  const {
    control,
    trigger,
    handleSubmit,
    getValues,
    formState: {errors, isValid},
  } = useForm({
    resolver: yupResolver(searchSchema),
  });

  const dispatch = useDispatch();
  const {token} = useAppSelector(state => state.User);
  const {pets: originalPets, isLoading} = useAppSelector(
    state => state.PetList
  );

  useEffect(() => {
    dispatch(petListActions.request({token}));
  }, []);

  const onSubmit = (params: ISearchForm<string>) => {};

  const keyExtractor = useCallback((item: IPetListItem) => `${item.id}`, []);

  const getDetails = (id: number) => {
    dispatch(getPetActions.request({id: String(id), token}));
  };

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<IPetListItem>) => (
      <Div onPress={() => getDetails(item.id)}>
        <LinearImage url={item.image_url} name={item.name} />
      </Div>
    ),
    []
  );

  const pets =
    typeof getValues().query !== 'string'
      ? originalPets
      : originalPets.filter(pet => {
          return new RegExp(
            escapeRegExp(getValues().query.trim().toLowerCase())
          ).test(pet.name);
        });

  return {
    control,
    trigger,
    handleSubmit,
    onSubmit,
    errors,
    isValid,
    pets,
    isLoading,
    renderItem,
    keyExtractor,
  };
};
