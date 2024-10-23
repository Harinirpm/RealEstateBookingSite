import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Grid2,
  Box,
  Button,
  Divider,
} from "@mui/material";

import { TextField, MenuItem, Select } from "@mui/material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import LeftContent from "../CustomDialogBox/LeftContent";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const AddDiscount = ({ open, onClose }) => {
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
        billName: "Bill Name Here",
        amount: "$1,000",
        discount: "Discount",
        discountamt: "10%",
      },
      {
        billName: "Bill Name Here",
        amount: "$1,000",
        discount: "Discount",
        discountamt: "10%",
      },
      {
        billName: "Bill Name Here",
        amount: "$1,000",
        discount: "Discount",
        discountamt: "10%",
      },
      {
        billName: "Utility Name Here",
        amount: "$1,000",
        discount: "Discount",
        discountamt: "10%",
      },
      {
        billName: "Utility Name Here",
        amount: "$1,000",
        discount: "Discount",
        discountamt: "10%",
      },
      {
        billName: "Utility Name Here",
        amount: "$1,000",
        discount: "Discount",
        discountamt: "10%",
      },
      {
        billName: "Utility Name Here",
        amount: "$1,000",
        discount: "Discount",
        discountamt: "10%",
      },
    ],
    totalPrice: "$1,200",
  };
  const [discount, setDiscount] = useState("");
  const [selectedDiscount, setSelectedDiscount] = useState("AED");

  const discountOptions = [
    { label: "AED", value: "AED", discountValue: 1000 },
    { label: "$", value: "USD", discountValue: 1000 },
    { label: "%", value: "Percentage", discountValue: 5 },
  ];
  const handleDiscountChange = (event) => {
    const selectedOption = discountOptions.find(
      (option) => option.value === event.target.value
    );
    setSelectedDiscount(event.target.value);
    setDiscount(selectedOption.discountValue);
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
        <DialogTitle sx={{ fontWeight: "600" }}>
          Add Discount To Unit
        </DialogTitle>
        <ClearOutlinedIcon
          sx={{ fontSize: "27px", padding: "15px", cursor: "pointer" }}
          onClick={onClose}
        />
      </Box>
      <Divider sx={{ width: "100%", color: "gray" }} />
      <DialogContent>
        <Grid2 container spacing={2}>
          {/* Left Section - Unit Details */}

          <Grid2 item xs={12} sm={8} flex={2}>
            <LeftContent />
          </Grid2>

          {/* Right Section - Pricing Details */}
          <Grid2 item xs={12} sm={4} flex={2}>
  <Box
    p={2}
    border="1px solid #e0e0e0"
    borderRadius="8px"
    sx={{ backgroundColor: "#F5F7FA", height: "500px", overflow: "hidden" }} 
  >
    
    <Typography
      sx={{
        fontWeight: "600",
        mb: "20px",
        position: "sticky",
        top: "0",
        backgroundColor: "#F5F7FA", 
        zIndex: 1, 
        paddingBottom: "10px",
        paddingTop: "10px",
      }}
    >
      UNIT PRICING DETAIL
    </Typography>
    <Box
      sx={{
        height: "390px", 
        overflowY: "auto", 
        paddingRight: "10px", 
        msScrollbarWidth:"none",
        scrollbarWidth:"none",
      }}
    >
      {selected.pricingDetails.map((item, index) => (
        <Box key={index}>
          <Box display="flex" justifyContent="space-between" mb={1}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "15px",
                  padding: "3px",
                  mb: "10px",
                  mt: "10px",
                }}
              >
                {item.billName}
              </Typography>
              <Typography sx={{ fontWeight: "500", fontSize: "15px" }}>
                {item.discount}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "15px",
                  mb: "10px",
                  ml: "100px",
                  mt: "10px",
                }}
              >
                {item.amount}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "160px",
                  backgroundColor: "#fff",
                  border: "0.5px solid #ccc",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <TextField
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                  placeholder="$1000.00"
                  size="small"
                  sx={{
                    width: "80px",
                    backgroundColor: "transparent",
                    "& .MuiInputBase-input": {
                      fontWeight: 600,
                      fontSize: "12px",
                      padding: "5px",
                      height: "10px",
                    },
                    border: "none",
                  }}
                  InputProps={{
                    disableUnderline: true,
                  }}
                />

                <Select
                  value={selectedDiscount}
                  onChange={handleDiscountChange}
                  IconComponent={KeyboardArrowDownIcon}
                  sx={{
                    width: "80px",
                    height: "20px",
                    backgroundColor: "transparent",
                    borderRadius: "0px",
                    border: "none",
                    borderLeft: "1px solid #ccc",
                    "& .MuiSelect-select": {
                      fontSize: "13px",
                      fontWeight: "500",
                      padding: "5px",
                      border: "none",
                    },
                    "& .MuiSelect-icon": {
                      fontSize: "17px",
                    },
                  }}
                >
                  {discountOptions.map((option) => (
                    <MenuItem
                      key={option.value}
                      value={option.value}
                      sx={{ fontSize: "15px", border: "none" }}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
            </Box>
          </Box>
          <Divider sx={{ my: 1 }} />
        </Box>
      ))}
    </Box>

   
    <Box
      display="flex"
      justifyContent="space-between"
      sx={{
        backgroundColor: "#E4E8EE",
        alignItems: "center",
        padding: "10px",
        position: "sticky",
        bottom: "0",
        borderRadius: "10px",
        zIndex: 1,
      }}
    >
      <Typography sx={{ fontWeight: "600" }}>Final Total</Typography>
      <Typography sx={{ fontWeight: "600" }}>{selected.totalPrice}</Typography>
    </Box>
  </Box>
  <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
              backgroundColor: "white",
            }}
          >
            <Button
              variant="contained"
              onClick={onClose}
              sx={{ mt: "10px", textTransform: "none", height: "45px",width:"100%",padding:"10px" }}
            >
              update & save
            </Button>
          </Box>
</Grid2>

        </Grid2>
      </DialogContent>
    </Dialog>
  );
};

export default AddDiscount;
