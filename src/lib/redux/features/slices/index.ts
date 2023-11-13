import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

import authReducer, { authPersistConfig } from "./authSlice";
import bookingsReducer, { bookingsPersistConfig } from "./bookingsSlice";
import chatReducer, { chatPersistConfig } from "./chatSlice";
import notificationsReducer, {
  notificationsPersistConfig,
} from "./notificationsSlice";
import profileReducer, { profilePersistConfig } from "./profileSlice";
import providersReducer, { providersPersistConfig } from "./providersSlice";
import servicesReducer, { servicesPersistConfig } from "./servicesSlice";
import { authApi } from "../apis/auth_api";
import { providersApi } from "../apis/providers_api";

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [providersApi.reducerPath]: providersApi.reducer,
  auth: persistReducer(authPersistConfig, authReducer),
  bookings: persistReducer(bookingsPersistConfig, bookingsReducer),
  chat: persistReducer(chatPersistConfig, chatReducer),
  notification: persistReducer(
    notificationsPersistConfig,
    notificationsReducer
  ),
  profile: persistReducer(profilePersistConfig, profileReducer),
  providers: persistReducer(providersPersistConfig, providersReducer),
  services: persistReducer(servicesPersistConfig, servicesReducer),
});

export default rootReducer;
