import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../assets/utils/getConfig';
import { setAlertData } from './alertData.slice';
import { setIsLoading } from './isLoading.slice';
import { setShowAlert } from './showAlert.slice';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    setCart: (state, action) => {
      const cart = action.payload;
      return cart;
    },
  },
});

export const getCartThunk = () => dispatch => {
  //Display loading screen
  dispatch(setIsLoading(true));
  // Request
  return axios
    .get('https://e-commerce-api-v2.academlo.tech/api/v1/cart', getConfig())
    .then(res => dispatch(setCart(res.data)))
    .catch(err => console.error(err))
    .finally(() => dispatch(setIsLoading(false)));
};

export const addToCartThunk = product => dispatch => {
  // Post
  return axios
    .post('https://e-commerce-api-v2.academlo.tech/api/v1/cart', product, getConfig())
    .then(() => {
      dispatch(getCartThunk());
      dispatch(
        setAlertData({ alertType: 'success', alertMessage: 'Product added to cart successfully.' })
      );
      dispatch(setShowAlert(true));
    })
    .catch(err => {
      const message =
        err.response.status === 401 ? 'Please log in to add products to cart.' : err.message;
      dispatch(setAlertData({ alertType: 'error', alertMessage: message }));
      dispatch(setShowAlert(true));
      console.error(err);
    })
    .finally(() => {
      setTimeout(() => {
        dispatch(setShowAlert(false));
      }, 2000);
    });
};

export const updateProductQtyThunk = (id, body) => dispatch => {
  //Display loading screen
  dispatch(setIsLoading(true));
  // Request
  return axios
    .put(`https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`, body, getConfig())
    .then(() => dispatch(getCartThunk()))
    .finally(() => dispatch(setIsLoading(false)));
};

export const deleteFromCartThunk = id => dispatch => {
  //Display loading screen
  dispatch(setIsLoading(true));
  // Request
  return axios
    .delete(`https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`, getConfig())
    .then(() => dispatch(getCartThunk()))
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
