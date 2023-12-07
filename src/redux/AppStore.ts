import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import categoriesReducer from "./categoriesSlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    category: categoriesReducer,
    products: productReducer,
    cart: cartReducer,
  },
});

export default store;
