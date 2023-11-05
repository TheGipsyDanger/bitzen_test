import {createAsyncAction, createCustomAction} from 'typesafe-actions';
import {IPostLogin} from '~/data/dataInterfaces';
import {IUser} from '~/utils/interfaces';

export const loginActions = createAsyncAction(
  'User/loginRequest',
  'User/loginRequestSuccess',
  'User/loginRequestFailure'
)<IPostLogin.Params, IUser, string>();
