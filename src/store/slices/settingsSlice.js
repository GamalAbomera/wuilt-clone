import { createSlice } from "@reduxjs/toolkit";
export const settings = createSlice({
  name: "settings",
  initialState: {
    imageSettings: {
      name: "",
      src: "",
      alt: "",
    },
  },
  reducers: {
    setSettings(state, action) {
      state[action.payload?.module]["name"] = action?.payload?.name;
      state[action.payload?.module]["src"] = action?.payload?.src;
      state[action.payload?.module]["hasOverlay"] = action?.payload.hasOverlay;
      state[action.payload?.module]["color"] = action?.payload.color;
    },
  },
});

export const { setSettings } = settings.actions;
export default settings.reducer;
