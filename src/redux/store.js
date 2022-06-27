
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    auth: authSlice,
  }
});

store.subscribe(() => {
  localStorage.setItem('cartItems', JSON.stringify(
    store.getState().cart.items
  ));
});

export default store;