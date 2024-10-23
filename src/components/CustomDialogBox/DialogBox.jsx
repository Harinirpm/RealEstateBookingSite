import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Grid2,
  Box,
  Divider,
} from "@mui/material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import LeftContent from "./LeftContent";

const DialogBox = ({ open, onClose, selectedLand }) => {
  const selected = {
    name: "Jumeirah Estate",
    unitCode: "UNIT-1234",
    location: "Rubix Apartment, K Tower, Floor 1",
    bedrooms: 2,
    bathrooms: 2,
    bhk: "2BHK",
    sqft: 2000,
    pricingDetails: [
      {
        billName: "Bill Name Here",
        amount: "$1,000",
        discount: "Discount",
        discountamt: "10%",
      },
      {
        billName: "Bill 2",
        amount: "$1,000",
        discount: "Discount",
        discountamt: "10%",
      },
      { billName: "Bill Name Here", amount: "$1,000" },
      { billName: "Bill Name Here", amount: "$1,000" },
      { billName: "Bill Name Here", amount: "$1,000" },
    ],
    totalPrice: "$1,200",
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <DialogTitle sx={{ fontWeight: "600" }}>Unit Details</DialogTitle>
        <ClearOutlinedIcon
          sx={{ fontSize: "27px", padding: "15px", cursor: "pointer",color:"#7C8594" }}
          onClick={onClose}
        />
      </Box>
      <Divider sx={{ width: "100%", color: "gray" }} />
      <DialogContent>
        {selectedLand ? (
          <Grid2 container spacing={2}>
            {/* Left Section - Unit Details */}

            <Grid2 item xs={12} sm={8} flex={2}>
              <LeftContent />
            </Grid2>

            {/* Right Section - Pricing Details */}
            <Grid2 item xs={12} sm={4} flex={2}>
              <Box
                p={2}
                // border="1px solid #e0e0e0"
                borderRadius="8px"
                sx={{ backgroundColor: "#F8F9FB" }}
              >
                <Typography sx={{ fontWeight: "600", mb: "20px" }}>
                  UNIT PRICING DETAILS
                </Typography>
                {selected.pricingDetails.map((item, index) => (
                  <Box key={index}>
                    <Box display="flex" justifyContent="space-between" mb={1}>
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                          sx={{
                            fontWeight: "600",
                            fontSize: "15px",
                            padding: "3px",
                          }}
                        >
                          {item.billName}
                        </Typography>
                        <Typography
                          sx={{ fontWeight: "500", fontSize: "15px" }}
                        >
                          {item.discount}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                          sx={{ fontWeight: "600", fontSize: "15px" }}
                        >
                          {item.amount}
                        </Typography>
                        <Typography
                          sx={{ fontWeight: "500", fontSize: "15px" }}
                        >
                          {item.discountamt}
                        </Typography>
                      </Box>
                    </Box>
                    <Divider sx={{ my: 1 }} />
                  </Box>
                ))}
                <Box
                  display="flex"
                  justifyContent="space-between"
                  mt={22}
                  sx={{
                    backgroundColor: "#E4E8EE",
                    alignItems: "center",
                    padding: "15px",
                    borderRadius: "10px",
                  }}
                >
                  <Typography sx={{ fontWeight: "600" }}>
                    Final Total
                  </Typography>
                  <Typography sx={{ fontWeight: "600" }}>
                    {selected.totalPrice}
                  </Typography>
                </Box>
              </Box>
            </Grid2>
          </Grid2>
        ) : (
          <Typography>No details available</Typography>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;
