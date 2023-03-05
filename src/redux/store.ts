import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import dataReducer from "./reducers/data-reducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import basketSlice from "./slices/basketSlice";
import userSlice from "./slices/userSlice";
import personalSlice from "./slices/personalSlice";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const persistConfig = {
  key: "rootUser",
  storage,
  whitelist: ["user", "email"],
};

export const store = configureStore({
  reducer: {
    data: dataReducer,
    basket: basketSlice,
    personal: personalSlice,
    user: persistReducer(persistConfig, userSlice),
  },
  middleware: middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
