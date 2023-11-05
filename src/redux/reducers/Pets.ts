import {createSlice} from '@reduxjs/toolkit';

interface IPetsState {
  isLoading: boolean;
}

const initialState: IPetsState = {
  isLoading: false,
};

const Pets = createSlice({
  name: 'Pets',
  initialState,
  reducers: {
    createPetRequest: () => {
      return {
        ...initialState,
        isLoading: true,
      };
    },
    createPetSuccess: () => {
      return {...initialState};
    },
    createPetFailure: () => {
      return {...initialState};
    },
  },
});

export default Pets.reducer;
