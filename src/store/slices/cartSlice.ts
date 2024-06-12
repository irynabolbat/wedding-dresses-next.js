import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartProduct } from "@/types/CartProduct";

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
      const productId = `${action.payload.id}_${action.payload.size}`;

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
    increment: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const item = state.items[id];

      if (item) {
        item.count++;
        state.totalCount++;
        state.totalPrice += item.price;
      }
    },
    decrement: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const item = state.items[id];

      if (item && item.count > 1) {
        item.count--;
        state.totalCount--;
        state.totalPrice -= item.price;
      }
    },
  },
});

export const { add, remove, clear, increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
