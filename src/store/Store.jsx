// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import paymentReducer from './PaymentSlice';

export const store = configureStore({
  reducer: {
    payment: paymentReducer,
  },
});
