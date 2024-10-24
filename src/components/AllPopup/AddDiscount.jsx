import React, { useEffect, useState } from "react";
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
import Buttons from "../Button/Button";
import { useDispatch } from "react-redux";
import { setDiscounts } from "../../store/PaymentSlice";

const AddDiscount = ({ open, onClose }) => {
  const dispatch = useDispatch();
 
  const selected = {
    name: "Jumeirah Estate",
    unitCode: "UNIT-1234",
    location: "Rubix Apartment, K Tower, Floor 1",
    bedrooms: 2,
    bathrooms: 2,
    bhk: "2BHK",
    sqft: 2000,
    pricingDetails: [
      { billName: "Bill Name Here", amount: "$1,000" },
      { billName: "Bill Name Here", amount: "$1,000" },
      { billName: "Bill Name Here", amount: "$1,000" },
      { billName: "Utility Name Here", amount: "$1,000" },
      { billName: "Utility Name Here", amount: "$1,000" },
    ],
    totalPrice: "$ 5000",
  };

  const [discountValues, setDiscountValues] = useState(Array(selected.pricingDetails.length).fill(0));
  const [discountTypes, setDiscountTypes] = useState(Array(selected.pricingDetails.length).fill("AED"));
  const [finalTotal, setFinalTotal] = useState(selected.totalPrice);
  const [discount,selectDiscount] = useState(selected.totalPrice);
  const discountOptions = [
    { label: "AED", value: "AED" },
    { label: "USD", value: "USD" },
    { label: "%", value: "Percentage" },
  ];
  const handleDiscountChange = (index, discountType, discountamt) => {
    const updatedValue = [...discountValues];
    let discountVal = 0;
    const itemAmount = parseFloat(
      selected.pricingDetails[index].amount.replace("$", "").replace(",", "")
    );
    if (discountType === "Percentage") {
      discountVal = (itemAmount * discountamt) / 100;
    } else if (discountType === "AED" || discountType === "USD") {
      discountVal = discountamt;
    }
    const potentialTotal = calculatePotentialTotal(
      updatedValue,
      discountVal,
      index
    );
    if (potentialTotal < 0) {
      alert("The total cannot be negative. Please adjust the discount.");
      return;
    }
    updatedValue[index] = discountVal;
    setDiscountValues(updatedValue);
    calculateFinalTotal(updatedValue);
  };
  const calculatePotentialTotal = (
    currentDiscountValues,
    newDiscount,
    index
  ) => {
    const updatedValues = [...currentDiscountValues];
    updatedValues[index] = newDiscount;
    let total = 0;
    selected.pricingDetails.forEach((item, idx) => {
      const itemAmount = parseFloat(
        item.amount.replace("$", "").replace(",", "")
      );
      const discountedAmount = itemAmount - updatedValues[idx];
      total += discountedAmount;
    });
    return total;
  };
  const calculateFinalTotal = (discountValues) => {
    let total = 0;
    selected.pricingDetails.forEach((item, index) => {
      const itemAmount = parseFloat(
        item.amount.replace("$", "").replace(",", "")
      );
      const discountedAmount = itemAmount - discountValues[index];
      total += discountedAmount;
    });
    setFinalTotal(`$${total.toLocaleString()}`);
    selectDiscount(`$${total.toLocaleString()}`);
  };
  const handleDiscountTypeChange = (index, type) => {
    const updatedTypes = [...discountTypes];
    updatedTypes[index] = type;
    setDiscountTypes(updatedTypes);
  };


  console.log(discount);
  useEffect(()=> {
    dispatch(setDiscounts(discount));
  },[discount,dispatch]);


  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <DialogTitle sx={{ fontWeight: "700", fontSize: "16px" }}>
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
          <Grid2 item xs={12} sm={8} flex={2}>
            <LeftContent />
          </Grid2>

          <Grid2 item xs={12} sm={4} flex={2}>
            <Box
              p={2}
              borderRadius="6px"
              sx={{
                backgroundColor: "#F8F9FB",
                height: "500px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "600",
                  mb: "20px",
                  position: "sticky",
                  top: "0",
                  backgroundColor: "#F8F9FB",
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
                  msScrollbarWidth: "none",
                  scrollbarWidth: "none",
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
                        <Typography
                          sx={{ fontWeight: "500", fontSize: "15px" }}
                        >
                          Discount
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
                          }}
                        >
                          <TextField
                            value={discountValues[index] || ""}
                            onChange={(e) =>
                              handleDiscountChange(
                                index,
                                "AED",
                                parseFloat(e.target.value)
                              )
                            }
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
                                border: "none",
                              },
                              "& .MuiInputBase-root": {
                                border: "none",
                              },
                              border: "transparent",
                            }}
                            InputProps={{
                              disableUnderline: true,
                            }}
                          />
                          <Select
                            value={discountTypes[index]}
                            onChange={(e) => {
                              handleDiscountTypeChange(index, e.target.value);
                              handleDiscountChange(
                                index,
                                e.target.value,
                                discountValues[index]
                              );
                            }}
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
                                fontWeight: "600",
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
                  borderRadius: "7px",
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  right: "10px",
                  zIndex: 1,
                }}
              >
                <Typography sx={{ fontWeight: "600" }}> Final Total</Typography>
                <Typography sx={{ fontWeight: "600" }}>{finalTotal}</Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              sx={{
                backgroundColor: "white",
                padding: "0px",
                width: "100%",
                mt:"20px",
              }}
            >
              <Buttons
                text="Apply Discount"
                bgcolor="#5078E1"
                textcolor="white"
                // onClick={handleSaveDiscount}
                sx={{
                  boxShadow: "none",
                  border: "1px solid #bdbfbe",
                  height: "45px",
                  width: "100%",
                  borderRadius: "10px",
                  fontWeight: 600,
                  fontSize: "16px",
                  mr:"px",
                }}
              />
            </Box>
          </Grid2>
        </Grid2>
      </DialogContent>
    </Dialog>
  );
};

export default AddDiscount;
