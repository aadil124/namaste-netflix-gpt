import { createSlice } from "@reduxjs/toolkit";

const languageConfigSlice = createSlice({
  name: "language",
  initialState: {
    langKey: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.langKey = action.payload;
    },
  },
});

export const { changeLanguage } = languageConfigSlice.actions;

export default languageConfigSlice.reducer;
