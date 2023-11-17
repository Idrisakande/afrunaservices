"use client";
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import rootReducer from "./features/slices";
import { authApi } from "./features/apis/auth_api";
import { providersApi } from "./features/apis/providers_api";
import { categoryApi } from "./features/apis/categories_api";
import {servicesApi} from "./features/apis/services_api"

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (gDM) =>
      gDM().concat(authApi.middleware, categoryApi.middleware,providersApi.middleware,servicesApi.middleware),
  });
};

export type AppStore = ReturnType<typeof setupStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const store = setupStore();
export const persistor = persistStore(store);
