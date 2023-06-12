import { configureStore } from "@reduxjs/toolkit";
import overlaySlice from "./overlaySlice";
import showImgSlice from "./showImgSlice";
import nextPageSlice from "./nextPageSlice";

export const store = configureStore({
  reducer: {
    overlay: overlaySlice,
    showImg: showImgSlice,
    nextPage: nextPageSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
