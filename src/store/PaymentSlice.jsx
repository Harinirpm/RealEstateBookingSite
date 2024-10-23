import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  amenitiesTotal: 0,    
  utilityTotal: 0,      
  removalTotal: 0,      
  discount: 0,          
  quoteAmount: 0,       
};
const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setAmenitiesTotal: (state, action) => {
      if (typeof action.payload !== "number") {
        console.warn("Payload for setAmenitiesTotal should be a number.");
      }
      state.amenitiesTotal = action.payload || 0;
      state.quoteAmount = calculateQuoteAmount(state);
   },
    setUtilityTotal: (state, action) => {
      state.utilityTotal = action.payload || 0;      
      state.quoteAmount = calculateQuoteAmount(state);
    },
    setRemovalTotal: (state, action) => {
      state.removalTotal = action.payload || 0;      
      state.quoteAmount = calculateQuoteAmount(state);
    },
    setDiscount: (state, action) => {
      state.discount = action.payload || 0;           
      state.quoteAmount = calculateQuoteAmount(state);
    },
  },
});
const calculateQuoteAmount = (state) => {
  const totalBeforeDiscount =
    state.amenitiesTotal + state.utilityTotal + state.removalTotal;
  return totalBeforeDiscount - state.discount;
};
export const selectQuoteAmount = (state) => state.payment.quoteAmount;
export const selectAmenitiesTotal = (state) => state.payment.amenitiesTotal;
export const {
  setAmenitiesTotal,
  setUtilityTotal,
  setRemovalTotal,
  setDiscount,
} = paymentSlice.actions;
export default paymentSlice.reducer;
