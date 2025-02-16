import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Components/features/user/userSlice";
import cartReducer from "./Components/features/cart/cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
