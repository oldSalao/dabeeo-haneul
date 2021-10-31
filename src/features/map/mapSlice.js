import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loc: null,
  pos: null,
  size: null,
  dragStat: false,
};

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    changePos: (state, action) => {
      const { x, y } = action.payload;
      state.pos = { x, y };
    },
    changeLoc: (state, action) => {
      const { x, y } = action.payload;
      state.loc = { x, y };
    },
    setSize: (state, action) => {
      const { width, height } = action.payload;
      state.size = { width, height };
    },
    dragStart: (state) => {
      state.dragStat = true;
    },
    dragEnd: (state) => {
      state.dragStat = false;
    },
  },
});

export const { changePos, changeLoc, dragStart, dragEnd, setSize } =
  mapSlice.actions;

export default mapSlice.reducer;
