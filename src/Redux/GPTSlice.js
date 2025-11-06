import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "GPT Sreach",
  initialState: {
    toggelGPTSearch: false,
  },
  reducers: {
    changeGPTSreachView: (state) => {
      state.toggelGPTSearch = !state.toggelGPTSearch;
    },
  },
});

export const { changeGPTSreachView } = GPTSlice.actions;

export default GPTSlice.reducer;
