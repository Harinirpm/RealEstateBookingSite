import React, { useState } from "react";
import Button from "@mui/material/Button";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Box,
  Divider,
  IconButton,
} from "@mui/material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Badge from "@mui/material/Badge";
import Primary from "../AllPopup/Primary"; 
import Secondary from "../AllPopup/Secondary";
import OneTimeChanges from "../AllPopup/OneTimeChanges";
import Refundable from "../AllPopup/Refundable";
import InventoryItem from '../AllPopup/InventoryItem';
import ParkingSlot from "../AllPopup/ParkingSlot";
import TooltipComponent from "../Tooltip/Tooltip";
const PricingPopup = ({ open, onClose }) => {
  const [selectedPopup, setSelectedPopup] = useState(null); 
  const items = [
    {
      text: "Primary",
      icon1: <ArrowForwardIosIcon />,
      icon2: <InfoOutlinedIcon />,
      bgcolor: "#FEEAEA80",
      color: "#B3776D",
    },
    {
      text: "Secondary",
      icon1: <ArrowForwardIosIcon />,
      icon2: <InfoOutlinedIcon />,
      bgcolor: "#EDE4FE80",
      color: "#896DB3",
    },
    {
      text: "One Time Charges",
      icon1: <ArrowForwardIosIcon />,
      icon2: <InfoOutlinedIcon />,
      bgcolor: "#DBF0F180",
      color: "#6DAFB3",
    },
    {
      text: "Refundables",
      icon1: <ArrowForwardIosIcon />,
      icon2: <InfoOutlinedIcon />,
      bgcolor: "#E4EDFF80",
      color: "#6D80B3",
    },
    {
      text: "Inventory Item",
      icon1: <ArrowForwardIosIcon />,
      icon2: <InfoOutlinedIcon />,
      bgcolor: "#FFFAD880",
      color: "#B3A16D",
    },
    {
      text: "Parking Slot",
      icon1: <ArrowForwardIosIcon />,
      icon2: <InfoOutlinedIcon />,
      bgcolor: "#FEEAEA80",
      color: "#B3776D",
    },
  ];
  const handleOpenPopup = (index) => {
    setSelectedPopup(index); 
  };
  const handleClosePopup = () => {
    setSelectedPopup(null); 
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <DialogTitle sx={{ fontWeight: "600",fontSize:"16px" }}>Pricing Table</DialogTitle>
        <ClearOutlinedIcon
          sx={{ fontSize: "27px", padding: "15px", cursor: "pointer",color:"#7C8594" }}
          onClick={onClose}
        />
      </Box>

      <Divider sx={{ width: "100%", color: "gray" }} />

      <DialogContent>
  {selectedPopup === null ? (
    items.map((item, index) => (
      <Box key={index} sx={{ display: "flex", flexDirection: "column" }}>
        <Button
          color={item.bgcolor}
          sx={{ textTransform: "none" }}
          disableTouchRipple
          onClick={() => handleOpenPopup(index)}
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            backgroundColor={item.bgcolor}
            sx={{
              height: "10%",
              width: "95%",
              borderRadius: "7px",
              padding: "20px",
              mb: "10px",
            }}
          >
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Badge
                badgeContent={"0"+(index+1)}
                sx={{
                  fontSize:"10px",
                  mr: "20px",
                  ml:"10px",
                  "& .MuiBadge-badge": {
                    backgroundColor: item.color,
                    color: "white",
                    height:"18px",
                    width:"14px",
                    borderRadius:"50px"
                  },
                }}
              />
              <Typography color={item.color} sx={{ fontSize: "14px",mt:"4px" }}>
                {item.text}
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              {/* <IconButton
                sx={{
                  color: "#CED3DD",
                  fontSize:"14px",
                  "&:hover": { backgroundColor: `${item.color}33` },
                }}
              >
                {item.icon2}
              </IconButton> */}
              <TooltipComponent />
              <IconButton sx={{ color: item.color,  }}>
                {React.cloneElement(item.icon1, {
                  sx: { fontSize:"17px"},
                })}
              </IconButton>
            </Box>
          </Box>
        </Button>
      </Box>
    ))
  ) : (
    <>
      {selectedPopup === 0 && (
        <Primary
          onClose={handleClosePopup}
          title="Primary Plan"
          content="Details of the Primary Plan go here."
        />
      )}
      {selectedPopup === 1 && (
        <Secondary
          onClose={handleClosePopup}
          title="Secondary Plan"
          content="Details of the Secondary Plan go here."
        />
      )}
      {selectedPopup === 2 && (
        <OneTimeChanges
          onClose={handleClosePopup}
          title="One Time Charges"
          content="Details of the One Time Charges go here."
        />
      )}
      {selectedPopup === 3 && (
        <Refundable
          onClose={handleClosePopup}
          title="One Time Charges"
          content="Details of the One Time Charges go here."
        />
      )}
      {selectedPopup === 4 && (
        <InventoryItem
          onClose={handleClosePopup}
          title="One Time Charges"
          content="Details of the One Time Charges go here."
        />
      )}
      {selectedPopup === 5 && (
        <ParkingSlot
          onClose={handleClosePopup}
          title="One Time Charges"
          content="Details of the One Time Charges go here."
        />
      )}
    </>
  )}
</DialogContent>

    </Dialog>
  );
};

export default PricingPopup;
