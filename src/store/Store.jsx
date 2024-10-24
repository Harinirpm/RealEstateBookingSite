import { configureStore } from "@reduxjs/toolkit";
import paymentReducer from "./PaymentSlice";

const store = configureStore({
  reducer: {
    payment: paymentReducer,
    
  },
});


export default store;
