import { configureStore } from "@reduxjs/toolkit";
import templatesSlice from "./slices/templatesSlice";
import settingsSlice from "./slices/settingsSlice";
export const store = configureStore({
  reducer: {
    templatesSlice,
    settings: settingsSlice,
  },
  devTools: true,
});
