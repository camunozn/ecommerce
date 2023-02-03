import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './slices/products.slice';
import purchasesSlice from './slices/purchases.slice';
import categoriesSlice from './slices/categories.slice';
import isLoadingSlice from './slices/isLoading.slice';
import loggedUserSlice from './slices/loggedUser.slice';
import showAlertSlice from './slices/showAlert.slice';
import alertDataSlice from './slices/alertData.slice';
import cartSlice from './slices/cart.slice';
import showCartSlice from './slices/showCart.slice';

export default configureStore({
  reducer: {
    products: productsSlice,
    purchases: purchasesSlice,
    cart: cartSlice,
    categories: categoriesSlice,
    loggedUser: loggedUserSlice,
    alertData: alertDataSlice,
    showAlert: showAlertSlice,
    showCart: showCartSlice,
    isLoading: isLoadingSlice,
  },
});
