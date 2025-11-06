import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import moviesSliceReducer from "./moviesSlice";
import GPTSreachReducer from "./GPTSlice";
import languageConfigReducer from "./languageConfigSlice";

const appStore = configureStore({
  reducer: {
    user: userSliceReducer,
    movies: moviesSliceReducer,
    GPTSreachPage: GPTSreachReducer,
    languageConfig: languageConfigReducer,
  },
});

export default appStore;
