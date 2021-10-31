import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  markers: [],
};

export const markerSlice = createSlice({
  name: "marker",
  initialState,
  reducers: {
    addMarker: (state, action) => {
      const marker = action.payload;
      state.markers.push(marker);
    },
    clear: (state) => {
      state.markers = [];
    },
  },
});

export const { addMarker, clear } = markerSlice.actions;

export default markerSlice.reducer;
