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
import userSlice from "./slices/userSlice";

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
    user: userSlice,
  },
  middleware: middleware,
  devTools: process.env.NODE_ENV === "development",
});
