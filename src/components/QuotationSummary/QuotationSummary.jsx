import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import React from "react";
import PaymentData from "../PaymentData/PaymentData";

function QuotationSummary() {
  const paymentDetails = [
    { label: "Total Amount", quantity: "3", value: "$ 3,600.00" },
    { label: "Total Discount", quantity: "10%", value: "- $ 100.00" },
    { label: "Total Refundable", quantity: "0%", value: "$ 0" },
    { label: "Total Tax", quantity: "18%", value: "$ 648.00" },
  ];

  const grandTotal = paymentDetails.reduce((total, item) => {
    const valueAsNumber = parseFloat(item.value.replace(/SAR|,/g, "").trim());
    return (total += valueAsNumber);
  }, 0);

  return (
    <Box
      sx={{
        backgroundColor: "#F5F7FA",
        ml: "20px",
        mt: "-10px",
        mr: "20px",
        padding: "10px",
        borderRadius: "10px",
        position: "fixed",
        width: "26%",
      }}
    >
      <PaymentData items={paymentDetails} grandTotal={grandTotal.toFixed(2)} />
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
            $ 4,148.00
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default QuotationSummary;
