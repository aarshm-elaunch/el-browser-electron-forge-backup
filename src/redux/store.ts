import { configureStore, combineReducers } from "@reduxjs/toolkit";
import browserReducer from "./slices/browserSlice";
import authReducer from "./slices/authSlice";
import storage from "redux-persist/lib/storage";
import { rootApiSlice } from "./api/rootApiSlice";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

// Combine the reducers first
const rootReducer = combineReducers({
  [rootApiSlice.reducerPath]: rootApiSlice.reducer,
  browser: browserReducer,
  auth: authReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["browser", "auth"], // Corrected whitelist
};

// Use combined reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (gDM) => gDM().concat(rootApiSlice.middleware),
});

export const persistor = persistStore(store);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
