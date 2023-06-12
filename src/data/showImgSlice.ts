import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState = {
  imgList: [],
  index: 0,
  currentImg: "",
};

export const showImgSlice = createSlice({
  name: "showImg",
  initialState,
  reducers: {
    setList: (state, action) => {
      state.imgList = action.payload;
    },
    currentImg: (state, action) => {
      state.index = action.payload;
      state.currentImg = state.imgList.filter(
        (url, index) => index === action.payload
      )[0];
    },
    setDefault: (state) => (state = initialState),
  },
});

export const { currentImg, setList, setDefault } = showImgSlice.actions;
export const selectCurrentImg = (state: RootState) => state.showImg.currentImg;
export const selectImgList = (state: RootState) => state.showImg.imgList;
export const selectIndex = (state: RootState) => state.showImg.index;
export default showImgSlice.reducer;
