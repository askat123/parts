import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProduct(state, action) {
      state.data = action.payload;
    },
  },
});

export const { getProduct } = ProductSlice.actions;

export default ProductSlice.reducer;
