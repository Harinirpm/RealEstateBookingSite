import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import React from "react";
import PaymentData from "../PaymentData/PaymentData";
import { useSelector } from "react-redux";
import { useState } from "react";
function QuotationSummary() {
  const paymentDetails = [
    { label: "Total Amount", quantity: "3", value: "$ 3,900.00" },
    { label: "Total Discount", quantity: "10%", value: "- $ 100.00" },
    { label: "Total Refundable", quantity: "0%", value: "$ 0" },
    { label: "Total Tax", quantity: "18%", value: "$ 648.00" },
  ];
  // const { items, quoteAmount } = useSelector((state) => state.payment);
  // console.log(quoteAmount);
  const { quoteAmount, amenitiesTotal, utilityTotal, removalTotal, discount } = useSelector(
    (state) => state.payment
  );
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
          {`$ ${grandTotal.toLocaleString()}`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default QuotationSummary;
