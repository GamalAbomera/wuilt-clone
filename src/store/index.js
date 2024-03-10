import { configureStore } from "@reduxjs/toolkit";
import templatesSlice from "./slices/templatesSlice";
import settingsSlice from "./slices/settingsSlice";
import colorsSlice from "./slices/colorsSlice";
export const store = configureStore({
  reducer: {
    templatesSlice,
    settings: settingsSlice,
    colors: colorsSlice,
  },
  devTools: true,
});
