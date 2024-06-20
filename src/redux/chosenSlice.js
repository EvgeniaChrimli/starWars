import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  persons: [],
};

export const chosenSlice = createSlice({
  name: "chosen",
  initialState,
  reducers: {
    setPerson(state, action) {
      state.persons.push({
        ...action.payload,
      });
    },
    removePerson(state, action) {
      state.persons.pop(action.payload);
    },
  },
});

export const { setPerson, removePerson } = chosenSlice.actions;
export default chosenSlice.reducer;
