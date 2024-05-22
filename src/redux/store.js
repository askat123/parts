import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../redux/slices/productSlice";
import basketSlice from "./slices/basketSlice";

export const store = configureStore({
  reducer: {
    data: productSlice,
    basket: basketSlice,
  },
});
