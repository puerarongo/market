import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import dataReducer from "./reducers/data-reducer";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import basketSlice from "./slices/basketSlice";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export const store = configureStore({
  reducer: {
    data: dataReducer,
    basket: basketSlice,
  },
  middleware: middleware,
  devTools: process.env.NODE_ENV === "development",
});
