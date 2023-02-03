import { createSlice } from '@reduxjs/toolkit';

export const showCartSlice = createSlice({
  name: 'showCart',
  initialState: false,
  reducers: {
    setShowCart: (state, action) => {
      const showCart = action.payload;
      return showCart;
    },
  },
});

export const { setShowCart } = showCartSlice.actions;

export default showCartSlice.reducer;
