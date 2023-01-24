import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: [
    {
      id: 1,
      name: "Galaxy S21",
      category: "smartphones",
      price: 1000,
      isAvailable: true,
    },
    {
      id: 2,
      name: "iPhone 14",
      category: "smartphones",
      price: 1400,
      isAvailable: true,
    },
  ],
  reducers: {},
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;
