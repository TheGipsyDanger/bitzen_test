import {createAsyncAction, createCustomAction} from 'typesafe-actions';
import {
  IPostLogin,
  IPostValidateToken,
  IPostResendPasswordCode,
  IPostResetPassword,
} from '~/data/dataInterfaces';
import {IUser} from '~/utils/interfaces';

export const loginActions = createAsyncAction(
  'User/loginRequest',
  'User/loginRequestSuccess',
  'User/loginRequestFailure'
)<IPostLogin.Params, IUser, string>();

export const resendCodeActions = createAsyncAction(
  'User/resendCodeRequest',
  'User/resendCodeSuccess',
  'User/resendCodeFailure'
)<IPostResendPasswordCode.Params, any, string>();

export const validateCodeActions = createAsyncAction(
  'User/validateCodeRequest',
  'User/validateCodeSuccess',
  'User/validateCodeFailure'
)<IPostValidateToken.Params, any, string>();

export const resetPasswordActions = createAsyncAction(
  'User/resetPasswordRequest',
  'User/resetPasswordSuccess',
  'User/resetPasswordFailure'
)<IPostResetPassword.Params, any, string>();

export const setToken = createCustomAction(
  'User/setToken',
  (token: string) => ({
    payload: token,
  })
);
