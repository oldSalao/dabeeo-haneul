import { configureStore } from "@reduxjs/toolkit";
import mapReducer from "../features/map/mapSlice";
import markerReducer from "../features/marker/markerSlice";

export const store = configureStore({
  reducer: { map: mapReducer, marker: markerReducer },
});
