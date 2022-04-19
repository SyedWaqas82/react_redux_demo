import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

export const loggedSlice = createSlice({
  name: 'logged',
  initialState,
  reducers: {
    singin: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { singin } = loggedSlice.actions;

export default loggedSlice.reducer;
