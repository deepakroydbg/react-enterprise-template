import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/features/user/userSlice";

import {
  persistStore,
  persistReducer,
} from "redux-persist";

import storage from "redux-persist/lib/storage"; // localStorage

// config
const persistConfig = {
  key: "root",
  storage,
};

// wrap reducer
const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
});

export const persistor = persistStore(store);