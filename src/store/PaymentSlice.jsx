import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  amenityTotal: 300,    
  utilityTotal: 100,      
  removalTotal: 10,      
  discount: 100,          
  quoteAmount: 10,       
};
const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setAmenitiesTotal: (state, action) => {
      if (typeof action.payload !== "number") {
        console.warn("Payload for setAmenitiesTotal should be a number.");
      }
      state.amenityTotal = calculateQuoteAmount(state);
   },
    setUtilitiesTotal: (state, action) => {     
      state.utilityTotal = calculateQuoteAmount(state);
    },
    setRemovalsTotal: (state, action) => {     
      state.removalTotal = calculateQuoteAmount(state);
    },
    setDiscounts: (state, action) => {          
      state.discount = calculateQuoteAmount(state);
    },
  },
});
const calculateQuoteAmount = (state) => {
  const totalBeforeDiscount =
    state.amenityTotal + state.utilityTotal + state.removalTotal;
  return totalBeforeDiscount - state.discount;
};
export const selectQuoteAmount = (state) => state.payment.quoteAmount;
export const selectAmenitiesTotal = (state) => state.payment.amenitiesTotal;
export const {
  setAmenitiesTotal,
  setUtilitiesTotal,
  setRemovalsTotal,
  setDiscounts,
} = paymentSlice.actions;
export default paymentSlice.reducer;
