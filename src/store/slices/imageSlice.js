import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getImages = createAsyncThunk(
  "images/getImages",
  async (payload) => {
    let apiKey = "";
    let apiUrl = "";
    if (payload.api === "pexels") {
      apiKey = "hXx3fBBvUc08YP9408kpIwdSSV3MQILtfPesXSnZqj6mqN6Cx9tckAJ0";
      apiUrl = `https://api.pexels.com/v1/search?query=${encodeURIComponent(
        payload.searchQuery
      )}&per_page=30`;
    } else {
      apiKey = "K-FdgDUNS8MYqVbw3QH7QXNiXUwiJKF9V0slq7oawU8";
      apiUrl = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
        payload.searchQuery
      )}&client_id=${apiKey}&per_page=30`;
    }

    return fetch(apiUrl, {
      headers: {
        Authorization: apiKey,
      },
    }).then((res) => res.json());
  }
);

export const images = createSlice({
  name: "images",
  initialState: {
    data: [],
    isLoading: false,
  },
  extraReducers: {
    [getImages.pending]: (state) => {
      state.isLoading = true;
    },
    [getImages.fulfilled]: (state, action) => {
      state.isLoading = false;
      if (action.payload.photos) {
        state.data = action.payload.photos.map((el) => el.src.medium);
      } else if (action.payload.results) {
        state.data = action.payload.results.map((el) => el.urls.small);
      }
    },
    [getImages.rejected]: (state) => {
      state.isLoading = false;
    },
  },
  reducers: {},
});

export const {} = images.actions;
export default images.reducer;
