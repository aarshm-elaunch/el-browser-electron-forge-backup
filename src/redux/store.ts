// redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import browserReducer from "./slices/browserSlice";

const store = configureStore({
  reducer: {
    browser: browserReducer,
  },
});

export default store;

// Define RootState and AppDispatch types for easier type usage
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
