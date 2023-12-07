import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    selectedProduct: null,
  },
  reducers: {
    setProducts: (state, actions) => {
      state.products = actions.payload;
    },
    selectedProduct: (state, actions) => {
      state.selectedProduct = actions.payload;
    },
  },
});

export const { setProducts, selectedProduct } = productSlice.actions;
export default productSlice.reducer;
