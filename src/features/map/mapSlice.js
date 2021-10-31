import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loc: {
    x: 0,
    y: 0,
  },
  pos: {
    x: 0,
    y: 0,
  },
  offset: {
    x: 0,
    y: 0,
  },
  dragStat: false,
};

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    changePos: (state, action) => {
      state.pos = action.payload;
    },
    changeLoc: (state, action) => {
      state.loc = action.payload;
    },
    dragStart: (state) => {
      state.dragStat = true;
    },
    dragEnd: (state) => {
      state.dragStat = false;
    },
  },
});

export const { changePos, changeLoc, dragStart, dragEnd } = mapSlice.actions;

export default mapSlice.reducer;
