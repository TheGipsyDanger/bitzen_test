import {createAsyncAction} from 'typesafe-actions';
import {IPostPet, IGetPet} from '~/data/dataInterfaces';
import {IPet} from '~/utils';

export const createPetActions = createAsyncAction(
  'PetList/createPetRequest',
  'PetList/createPetSuccess',
  'PetList/createPetFailure'
)<IPostPet.Params, string, string>();

export const getPetActions = createAsyncAction(
  'PetList/getRequest',
  'PetList/getSuccess',
  'PetList/getFailure'
)<IGetPet.Params, IPet, string>();
