import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Grid2,
  Box,
  Divider,
  Button,
  IconButton,
} from "@mui/material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import LeftContent from "../CustomDialogBox/LeftContent";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const RemoveComponent = ({ open, onClose }) => {
  const selected = {
    name: "Jumeirah Estate",
    unitCode: "UNIT-1234",
    location: "Rubix Apartment, K Tower, Floor 1",
    bedrooms: 2,
    bathrooms: 2,
    bhk: "2BHK",
    sqft: 2000,
    totalPrice: "$1,200",
  };

  const [pricingDetails, setPricingDetails]  = useState([
      {
        billName: "Bill Name Here",
        amount: "$1,000",
        icon: <DeleteOutlinedIcon />,
      },
      {
        billName: "Bill Name Here",
        amount: "$1,000",
        icon: <DeleteOutlinedIcon />,
      },
      {
        billName: "Bill Name Here",
        amount: "$1,000",
        icon: <DeleteOutlinedIcon />,
      },
      {
        billName: "Amenity Name Here",
        amount: "$1,000",
        icon: <DeleteOutlinedIcon />,
      },
      {
        billName: "Amenity Name Here",
        amount: "$1,000",
        icon: <DeleteOutlinedIcon />,
      },
      {
        billName: "Amenity Name Here",
        amount: "$1,000",
        icon: <DeleteOutlinedIcon />,
      },
      {
        billName: "Amenity Name Here",
        amount: "$1,000",
        icon: <DeleteOutlinedIcon />,
      },
      {
        billName: "Amenity Name Here",
        amount: "$1,000",
        icon: <DeleteOutlinedIcon />,
      },
      {
        billName: "Amenity Name Here",
        amount: "$1,000",
        icon: <DeleteOutlinedIcon />,
      },
      {
        billName: "Amenity Name Here",
        amount: "$1,000",
        icon: <DeleteOutlinedIcon />,
      },
    ]);

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

  const handleDelete = (indexToRemove) => {
    const updatePricingDetails = pricingDetails.filter((_,index) => index !== indexToRemove);
    setPricingDetails(updatePricingDetails);
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
        <DialogTitle sx={{ fontWeight: "600" }}>Remove Component</DialogTitle>
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
              sx={{ backgroundColor: "#F5F7FA", height: "500px", position: "relative" }}
            >
              <Typography sx={{ fontWeight: "600", mb: "20px", position: "sticky", top: 0, backgroundColor: "#F5F7FA", zIndex: 1 }}>
                UNIT PRICING DETAIL
              </Typography>
              <Box sx={{ overflowY: "auto", maxHeight: "380px",msScrollbarWidth:"none",
        scrollbarWidth:"none", }}>
                {pricingDetails.map((item, index) => (
                  <Box key={index}>
                    <Box display="flex" justifyContent="space-between" mb={0}>
                      <Typography
                        sx={{
                          fontWeight: "600",
                          fontSize: "15px",
                          padding: "3px",
                          mb: "5px",
                          mt: "2px",
                        }}
                      >
                        {item.billName}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: "600",
                            fontSize: "15px",
                            ml: "100px",
                            mt: "5px",
                          }}
                        >
                          {item.amount}
                        </Typography>
                        <IconButton
                          sx={{
                            color: "#fa5628",
                            height: "30px",
                            width: "30px",
                            padding: "5px",
                            backgroundColor: "#ffdbd1",
                            borderRadius: "8px",
                            ml: "10px",
                           "&:hover": { backgroundColor:"pink" },
                          }}
                          onClick={() => handleDelete(index)} 
                        >
                          {item.icon}
                        </IconButton>
                      </Box>
                    </Box>
                    <Divider sx={{ my: 1 }} />
                  </Box>
                ))}
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                mt={2}
                sx={{
                  backgroundColor: "#E4E8EE",
                  alignItems: "center",
                  padding: "10px",
                  borderRadius: "10px",
                  position: "sticky",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  zIndex: 1,
                }}
              >
                <Typography sx={{ fontWeight: "600" }}>Final Total</Typography>
                <Typography sx={{ fontWeight: "600" }}>
                  {selected.totalPrice}
                </Typography>
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

export default RemoveComponent;
