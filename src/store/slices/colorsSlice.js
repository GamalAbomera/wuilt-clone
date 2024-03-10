import { createSlice } from "@reduxjs/toolkit";
export const colors = createSlice({
  name: "colors",
  initialState: {
    pallets: [
      {
        title: "Green Forest",
        mainColor: "#76ABAE",
        subColor: "#31363F",
        textColor: "#EEEEEE",
      },
      {
        title: "Sun rise",
        mainColor: "#891652",
        subColor: "#240A34",
        textColor: "#FFEDD8",
      },
      {
        title: "Green Sea",
        mainColor: "#AAD9BB",
        subColor: "#80BCBD",
        textColor: "#0F1035",
      },
      {
        title: "Purple Sun",
        mainColor: "#9400FF",
        subColor: "#27005D",
        textColor: "#fff",
      },
    ],
    toggleColorsPanel: false,
  },
  reducers: {
    handleToggleColorsPanel(state) {
      state.toggleColorsPanel = !state.toggleColorsPanel;
    },
  },
});

export const { handleToggleColorsPanel } = colors.actions;
export default colors.reducer;
