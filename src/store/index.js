import { configureStore } from "@reduxjs/toolkit";
import templatesSlice from "./slices/templatesSlice";
import settingsSlice from "./slices/settingsSlice";
import colorsSlice from "./slices/colorsSlice";
import imageSlice from "./slices/imageSlice";
export const store = configureStore({
  reducer: {
    templatesSlice,
    settings: settingsSlice,
    colors: colorsSlice,
    images: imageSlice,
  },
  devTools: true,
});
