import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from './isLoading.slice';

export const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      const products = action.payload;
      return products;
    },
  },
});

export const getProductsThunk = () => dispatch => {
  // Diplay loading screen
  dispatch(setIsLoading(true));
  // Get products data
  axios
    .get('https://e-commerce-api-v2.academlo.tech/api/v1/products')
    .then(res => dispatch(setProducts(res.data)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const filterProductsByCategoryThunk = id => dispatch => {
  // Display loading screen
  dispatch(setIsLoading(true));
  // Filter by category ID
  return axios
    .get(
      `https://e-commerce-api-v2.academlo.tech/api/v1/products/?categoryId=${id}`
    )
    .then(res => dispatch(setProducts(res.data)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
