import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

type initialStateType = {
  renowacje: string | undefined;
  aerograf: string | undefined;
  motory: string | undefined;
};

const initialState: initialStateType = {
  renowacje: "",
  aerograf: "",
  motory: "",
};

const nextPageSlice = createSlice({
  name: "nextPage",
  initialState,
  reducers: {
    swapToken: (state, action) => {
      const page = action.payload.page;
      state[page as keyof typeof initialState] = action.payload.key;
    },
  },
});

export const { swapToken } = nextPageSlice.actions;
export const selectPageToken = (state: RootState) => state.nextPage;

export default nextPageSlice.reducer;
