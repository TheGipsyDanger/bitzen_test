import {createSlice} from '@reduxjs/toolkit';
import {IPetListItem} from '~/utils';

interface IPetListState {
  pets: IPetListItem[];
  isLoading: boolean;
}

const initialState: IPetListState = {
  pets: [] as IPetListItem[],
  isLoading: false,
};

const PetList = createSlice({
  name: 'PetList',
  initialState,
  reducers: {
    getListRequest: () => {
      return {
        ...initialState,
        isLoading: true,
      };
    },
    getListSuccess: (_, {payload}) => {
      return {...initialState, pets: payload};
    },
    getListFailure: () => {
      return {...initialState};
    },
  },
});

export default PetList.reducer;
