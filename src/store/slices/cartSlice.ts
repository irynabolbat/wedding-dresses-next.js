import { CartProduct } from "@/types/CartProduct";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type CartState = {
  items: { [id: string]: CartProduct };
  totalPrice: number;
  totalCount: number;
};

const initialState: CartState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartProduct>) => {
      const productId: string = action.payload.id;

      if (!(productId in state.items)) {
        state.items[productId] = {
          ...action.payload,
          count: 0,
        };
      }

      state.items[productId].count++;
      state.totalCount++;
      state.totalPrice += action.payload.price;
    },
    remove: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const item = state.items[id];

      if (item) {
        state.totalPrice -= item.price * item.count;
        state.totalCount -= item.count;
        delete state.items[id];
      }
    },
    clear: (state) => {
      state.items = {};
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const { add, remove, clear } = cartSlice.actions;

export default cartSlice.reducer;
