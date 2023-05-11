import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./todoSlice";
const store = configureStore({
  reducer: {
    todo: cartSlice,
  },
});
export default store;
