import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import React from "react";
import PaymentData from "../PaymentData/PaymentData";
import { useSelector } from "react-redux";
import { useState } from "react";
function QuotationSummary() {
  const {amenityTotal, utilityTotal, removalTotal, discount } = useSelector(
    (state) => state.payment
  );
  console.log(amenityTotal);
  console.log(removalTotal);
  console.log(utilityTotal);
  console.log(discount);
  const totalAmount = amenityTotal+utilityTotal + removalTotal;
  const totalTax = totalAmount * 0.18;
  const totalDiscount = discount;
  const quoteTotal = (totalAmount - totalDiscount) + totalTax;
  // if(quoteTotal<0){
  //   alert("should not be less than zero");
  // }
  const paymentDetails = [
    { label: "Total Amount", quantity: "3", value: `$ ${totalAmount.toFixed(2)}` },
    { label: "Total Discount", quantity: "10%", value: `- $ ${totalDiscount.toFixed(2)}`},
    { label: "Total Refundable", quantity: "0%", value: "$ 0" },
    { label: "Total Tax", quantity: "18%", value: `$ ${totalTax.toFixed(2)}` },
  ];
  const [grandTotal, setGrandTotal] = useState(0);
  const updateGrandTotal = (newTotal) => {
    setGrandTotal(newTotal);
  };
  return (
    <Box
      sx={{
        backgroundColor: "#F8F9FB",
        ml: "20px",
        mt: "-10px",
        mr: "20px",
        padding: "10px",
        borderRadius: "10px",
        position: "fixed",
        width: "26%",
      }}
    >
      <PaymentData items={paymentDetails} updateGrandTotal={updateGrandTotal} />
      <Box sx={{ marginBottom: "0" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "100px",
            // marginBottom: "20px",
          }}
        >
          <Divider sx={{ my: 1, width: "100%" }} />
        </Box>

        <Box
          sx={{ display: "flex", justifyContent: "space-between", ml: "20px" }}
        >
          <Typography sx={{ fontSize: "17px", fontWeight: 600 }}>
            Quote Amount
          </Typography>
          <Typography sx={{ fontSize: "17px", fontWeight: 600 }}>
          {`$ ${quoteTotal.toLocaleString()}`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default QuotationSummary;
