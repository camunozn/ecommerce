import { configureStore } from "@reduxjs/toolkit";
import isLoadingSlice from "./slices/isLoading.slice";
import productsSlice from "./slices/products.slice";
import tokenSlice from "./slices/token.slice";

export default configureStore({
  reducer: {
    products: productsSlice,
    isLoading: isLoadingSlice,
    token: tokenSlice,
  },
});
