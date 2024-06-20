import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import chosenSlice from "./chosenSlice";

export const store = configureStore({
  reducer: { user: userSlice, chosen: chosenSlice },
});
