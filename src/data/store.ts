import { configureStore } from "@reduxjs/toolkit";
import overlaySlice from "./overlaySlice";
import showImgSlice from "./showImgSlice";

export const store = configureStore({
  reducer: {
    overlay: overlaySlice,
    showImg: showImgSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
