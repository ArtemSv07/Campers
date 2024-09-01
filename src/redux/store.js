import { configureStore } from "@reduxjs/toolkit";
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

import campersReducer from "./campersSlice";
import filtersReducer from "./filtersCampersSlice";

const likesPersistConfig = {
  key: "likesCampers",
  storage,
  whitelist: ["likeItems"],
};

const persistedfiltersReducer = persistReducer(
  likesPersistConfig,
  filtersReducer
);

const store = configureStore({
  reducer: {
    campers: campersReducer,
    filterCampers: persistedfiltersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
