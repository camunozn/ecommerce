import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from './isLoading.slice';

export const catergoriesSlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    setCategories: (state, action) => {
      const categories = action.payload;
      return categories;
    },
  },
});

export const getCategoriesThunk = () => dispatch => {
  // Display loading screen
  dispatch(setIsLoading(true));
  // Get products data
  axios
    .get('https://e-commerce-api-v2.academlo.tech/api/v1/categories')
    .then(res => dispatch(setCategories(res.data)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setCategories } = catergoriesSlice.actions;

export default catergoriesSlice.reducer;
