import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  items: [
    { label: "Total Amount", quantity: "3", value: "$ 3,600.00" },
    { label: "Total Discount", quantity: "10%", value: "- $ 100.00" },
    { label: "Total Refundable", quantity: "0%", value: "$ 0" },
    { label: "Total Tax", quantity: "18%", value: "$ 648.00" },
  ],
  quoteAmount: "$ 4,148.00", 
};
const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    updateQuoteAmount: (state, action) => {
      state.quoteAmount = action.payload;
    },
  },
});
export const { updateQuoteAmount } = paymentSlice.actions;
export default paymentSlice.reducer;
