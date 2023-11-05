import {createAsyncAction} from 'typesafe-actions';
import {IGetPets} from '~/data/dataInterfaces';
import {IPetListItem} from '~/utils/interfaces';

export const petListActions = createAsyncAction(
  'PetList/getListRequest',
  'PetList/getListSuccess',
  'PetList/getListFailure'
)<IGetPets.Params, IPetListItem[], string>();
