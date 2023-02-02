import { createSlice } from '@reduxjs/toolkit';

export const alertDataSlice = createSlice({
  name: 'alertData',
  initialState: {
    alertType: '',
    alertMessage: '',
  },
  reducers: {
    setAlertData: (state, action) => {
      const alertData = action.payload;
      return alertData;
    },
  },
});

export const { setAlertData } = alertDataSlice.actions;

export default alertDataSlice.reducer;
