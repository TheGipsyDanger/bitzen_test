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
  },
});

export default User.reducer;
