import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './slices/products.slice';
import purchasesSlice from './slices/purchases.slice';
import categoriesSlice from './slices/categories.slice';
import isLoadingSlice from './slices/isLoading.slice';
import loggedUserSlice from './slices/loggedUser.slice';
import showAlertSlice from './slices/showAlert.slice';
import alertDataSlice from './slices/alertData.slice';

export default configureStore({
  reducer: {
    products: productsSlice,
    purchases: purchasesSlice,
    categories: categoriesSlice,
    loggedUser: loggedUserSlice,
    isLoading: isLoadingSlice,
    showAlert: showAlertSlice,
    alertData: alertDataSlice,
  },
});
