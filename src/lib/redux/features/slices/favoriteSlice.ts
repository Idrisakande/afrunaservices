import { IService, IServices } from "@/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import storage from "redux-persist/lib/storage";
const favoritesConfig = {
  key: "favorites",
  storage,
};

type TInitialFavoriteState = IService[];
type TInitialFavoritesState = IServices[];
const favoritesSlice = createSlice({
  //   initialState: [] as TInitialFavoriteState,
  initialState: [] as TInitialFavoritesState,
  name: "favorites",
  reducers: {
    // toggleFavoriteService(state, action: PayloadAction<IService>) {
    //   const container = new Set(state);
    //   const payload = action.payload;
    //   if (container.has(payload)) {
    //     container.delete(payload);
    //     state = Array.from(container);
    //   } else {
    //     container.add(payload);
    //     state = Array.from(container);
    //   }
    // },
    toggleFavoriteServices(state, action: PayloadAction<IServices>) {
      if (state.length === 0) {
        state.push(action.payload);
      } else {
        const container = new Set(state);
        const payload = action.payload;
        if (container.has(payload)) {
          container.delete(payload);
          state = Array.from(container);
          toast.info("removed!");
          console.log(state);
        } else {
          container.add(payload);
          state = Array.from(container);
          toast.info("favorited!");
          console.log(state);
        }
      }
    },
  },
});

// Export your favoriteSlice and persist config
export { favoritesConfig };
export const { toggleFavoriteServices } = favoritesSlice.actions;
export default favoritesSlice.reducer;
