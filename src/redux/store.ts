import { configureStore } from "@reduxjs/toolkit";
import browserReducer from "./slices/browserSlice";
import authReducer from "./slices/authSlice";
import { rootApiSlice } from "./api/rootApiSlice";

const store = configureStore({
  reducer: {
    [rootApiSlice.reducerPath]: rootApiSlice.reducer,
    browser: browserReducer,
    auth:authReducer  
  },
  devTools: true,
  middleware: (gDM) => gDM().concat(rootApiSlice.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

