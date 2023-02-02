import { createSlice } from '@reduxjs/toolkit';

export const showAlertSlice = createSlice({
  name: 'showAlert',
  initialState: false,
  reducers: {
    setShowAlert: (state, action) => {
      const showAlert = action.payload;
      return showAlert;
    },
  },
});

export const { setShowAlert } = showAlertSlice.actions;

export default showAlertSlice.reducer;
