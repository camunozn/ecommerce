import axios from 'axios';
import getConfig from '../../assets/utils/getConfig';
import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from './isLoading.slice';
import { setAlertData } from './alertData.slice';
import { setShowAlert } from './showAlert.slice';
import { getCartThunk } from './cart.slice';

export const purchasesSlice = createSlice({
  name: 'purchases',
  initialState: [],
  reducers: {
    setPurchases: (state, action) => {
      const purchases = action.payload;
      return purchases;
    },
  },
});

export const getPurchasesThunk = () => dispatch => {
  // Display loading page
  dispatch(setIsLoading(true));
  // Request
  return axios
    .get('https://e-commerce-api-v2.academlo.tech/api/v1/purchases', getConfig())
    .then(res => dispatch(setPurchases(res.data)))
    .catch(err => console.error(err))
    .finally(() => dispatch(setIsLoading(false)));
};

export const addPurchaseThunk = () => dispatch => {
  // Post
  return axios
    .post('https://e-commerce-api-v2.academlo.tech/api/v1/purchases', [], getConfig())
    .then(res => {
      dispatch(setPurchases(res.data));
      dispatch(getCartThunk());
      dispatch(setAlertData({ alertType: 'success', alertMessage: 'Checkout completed!' }));
      dispatch(setShowAlert(true));
    })
    .catch(err => {
      dispatch(setAlertData({ alertType: 'error', alertMessage: err.message }));
      dispatch(setShowAlert(true));
      console.error(err);
    })
    .finally(() => {
      setTimeout(() => {
        dispatch(setShowAlert(false));
      }, 2000);
    });
};

export const { setPurchases } = purchasesSlice.actions;

export default purchasesSlice.reducer;
