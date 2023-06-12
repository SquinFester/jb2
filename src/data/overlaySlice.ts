import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState: boolean = false;

export const overlaySlice = createSlice({
  name: "overlay",
  initialState,
  reducers: {
    overlayToggle: (state) => !state,
    switchOff: () => false,
  },
});

export const { overlayToggle, switchOff } = overlaySlice.actions;

export const selectOverlay = (state: RootState) => state.overlay;

export default overlaySlice.reducer;
