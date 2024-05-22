// redux/slices/basketSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const existingProductIndex = state.products.findIndex(product => product.id === action.payload.id);
      if (existingProductIndex !== -1) {
        state.products[existingProductIndex].quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromBasket: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload.id);
    },
    decreaseQuantity: (state, action) => {
      const product = state.products.find(product => product.id === action.payload.id);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
    increaseQuantity: (state, action) => {
      const product = state.products.find(product => product.id === action.payload.id);
      if (product) {
        product.quantity += 1;
      }
    },
    clearBasket: (state) => {
      state.products = [];
    },
  },
});

export const { addToBasket, removeFromBasket, decreaseQuantity, increaseQuantity, clearBasket } = basketSlice.actions;

export default basketSlice.reducer;
