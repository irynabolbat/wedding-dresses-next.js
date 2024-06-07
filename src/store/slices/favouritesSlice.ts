import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Dress } from "@/types/Dress";

export type FavouritesState = {
  items: Dress[];
};

const initialState: FavouritesState = {
  items: [],
};

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Dress>) => {
      const item = action.payload;
      if (!state.items.find((fav) => fav.id === item.id)) {
        state.items.push(item);
      }
    },
    remove: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (product: Dress) => product.id !== action.payload
      );
    },
  },
});

export const { add, remove } = favouritesSlice.actions;

export default favouritesSlice.reducer;
