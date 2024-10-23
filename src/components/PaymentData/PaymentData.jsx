import React from 'react';
import { Box, Typography, Divider } from "@mui/material";
import { useEffect } from 'react';
function PaymentData({ items = [], updateGrandTotal}) {
  useEffect(() => {
    const grandTotal = items.reduce((total, item) => {
      const valueAsNumber = parseFloat(item.value.replace(/[^0-9.-]/g, ""));
      return total + valueAsNumber;
    }, 0);
    updateGrandTotal(grandTotal);
  }, [items, updateGrandTotal]);

  return (
    <Box>
      <Box sx={{ marginBottom: "10px" }}>
        
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
            ml: "20px",
            mr: "20px",
            mt: "20px",
          }}
        >
          <Typography sx={{ color: "#9ea0a3", flexBasis: "50%" }}>
            DESCRIPTION
          </Typography>
          <Typography sx={{color: "#9ea0a3", flexBasis: "15%" }}>
            QTY
          </Typography>
          <Typography sx={{color: "#9ea0a3", flexBasis: "20%" }}>
            AMOUNT
          </Typography>
        </Box>
        <Divider sx={{ my: 1, width: "100%" }} />

       
        {items.length > 0 ? (
          items.map((item, index) => (
            <React.Fragment key={index}>
            {(index>1 || index == items.length-1) && (<Divider sx={{ my: 1, width: "100%" }} />)}
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
                ml: "20px"
              }}
            >
              <Typography
                sx={{
                  color: "#696969",
                  fontWeight: "500",
                  fontSize: "15px",
                  letterSpacing: "0.9px",
                  mt: "8px",
                  flexBasis: "40%",
                }}
              >
                {item.label}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#696969",
                  fontWeight: "400",
                  fontSize: "15px",
                  letterSpacing: "0.9px",
                  mt: "8px",
                  flexBasis: "15%",
                  textAlign: "center",
                }}
              >
                {item.quantity}
              </Typography>
              <Typography
                variant="h6"
                fontWeight="500"
                sx={{
                  fontSize: "15px",
                  letterSpacing: "0.9px",
                  marginRight: "20px",
                  mt: "8px",
                  flexBasis: "22%",
                  textAlign: "right",
                  fontWeight: item.value === "- $ 100.00" 
                      ? "400" 
                      : item.value.includes("$") || 
                        ["3000", "0", "648"].includes(item.value.replace(/[^0-9]/g, '')) 
                      ? "600" 
                      : "200", 
                  }}
              >
                {item.value}
              </Typography>
            </Box>
              </React.Fragment>
          ))
        ) : (
          <Typography
            variant="h6"
            sx={{
              color: "#696969",
              textAlign: "center",
              margin: "20px 0",
            }}
          >
            No items to display.
          </Typography>
        )}

       
        <Divider sx={{ my: 1, width: "100%" }} />

      </Box>
        
    </Box>
  );
}

export default PaymentData;

