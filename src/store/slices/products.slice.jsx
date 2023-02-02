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
  return axios
    .get('https://e-commerce-api-v2.academlo.tech/api/v1/products')
    .then(res => dispatch(setProducts(res.data)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const filterProductByNameThunk = searchedValue => dispatch => {
  // Display loading screen
  dispatch(setIsLoading(true));
  // Filter by product title
  return axios
    .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/?title=${searchedValue}`)
    .then(res => dispatch(setProducts(res.data)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const filterProductsByCategoryThunk =
  (id, selfId = undefined) =>
  dispatch => {
    // Display loading screen
    dispatch(setIsLoading(true));
    // Filter by category ID
    return axios
      .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/?categoryId=${id}`)
      .then(res => {
        const data = res.data;
        dispatch(setProducts(selfId ? data.filter(el => el.id !== parseInt(selfId)) : data));
      })
      .finally(() => dispatch(setIsLoading(false)));
  };

export const filterProductsByPriceThunk = (minPrice, maxPrice) => dispatch => {
  // Display loading screen
  dispatch(setIsLoading(true));
  // Get products and filter by price
  axios
    .get('https://e-commerce-api-v2.academlo.tech/api/v1/products')
    .then(res => {
      const data = res.data;
      const filteredData = data.filter(
        product => product.price >= minPrice && product.price <= maxPrice
      );
      dispatch(setProducts(filteredData));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
