import {createSlice} from '@reduxjs/toolkit';
import {IUser} from '~/utils';

interface IUserState {
  user: IUser;
  token: string;
  isLoading: boolean;
}

const initialState: IUserState = {
  user: {} as IUser,
  token: '',
  isLoading: false,
};

const User = createSlice({
  name: 'User',
  initialState,
  reducers: {
    loginRequest: () => {
      return {
        ...initialState,
        isLoading: true,
      };
    },
    loginRequestSuccess: (_, {payload}) => {
      return {...initialState, user: payload};
    },
    loginRequestFailure: (_, {payload}) => {
      return {...initialState, error: payload};
    },
    resendCodeRequest: state => {
      return {
        ...state,
        isLoading: true,
      };
    },
    resendCodeSuccess: state => {
      return {...state, isLoading: false};
    },
    resendCodeFailure: (state, {payload}) => {
      return {...state, isLoading: false, error: payload};
    },
    validateCodeRequest: state => {
      return {
        ...state,
        isLoading: true,
      };
    },
    validateCodeSuccess: state => {
      return {...state, isLoading: false};
    },
    validateCodeFailure: (state, {payload}) => {
      return {...state, isLoading: false, error: payload};
    },
    resetPasswordRequest: state => {
      return {
        ...state,
        isLoading: true,
      };
    },
    resetPasswordSuccess: state => {
      return {...state, isLoading: false};
    },
    resetPasswordFailure: (state, {payload}) => {
      return {...state, isLoading: false, error: payload};
    },
    setToken: (state, {payload}) => {
      return {...state, token: payload};
    },
  },
});

export default User.reducer;
