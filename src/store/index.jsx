import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './slices/categories.slice';
import isLoadingSlice from './slices/isLoading.slice';
import productsSlice from './slices/products.slice';
import tokenSlice from './slices/token.slice';

export default configureStore({
  reducer: {
    products: productsSlice,
    categories: categoriesSlice,
    isLoading: isLoadingSlice,
    token: tokenSlice,
  },
});
