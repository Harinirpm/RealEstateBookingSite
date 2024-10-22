import React, { useState } from "react";
import Button from "@mui/material/Button";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Badge from "@mui/material/Badge";
import Primary from "../AllPopup/Primary"; 
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
        <DialogTitle sx={{ fontWeight: "600" }}>Pricing Table</DialogTitle>
        <ClearOutlinedIcon
          sx={{ fontSize: "27px", padding: "15px", cursor: "pointer" }}
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
                      badgeContent={index + 1}
                      sx={{
                        mr: "20px",
                        "& .MuiBadge-badge": {
                          backgroundColor: item.color,
                          color: "white",
                        },
                      }}
                    />
                    <Typography color={item.color} sx={{ fontSize: "20px" }}>
                      {item.text}
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                  >
                    <Button
                      sx={{
                        borderRadius: "50px 50px",
                        color: item.color,
                        "&:hover": { backgroundColor: `${item.color}33` },
                      }}
                    >
                      {item.icon2}
                    </Button>
                    <Button sx={{ color: "black", borderRadius: "50px 50px" }}>
                      {React.cloneElement(item.icon1, {
                        sx: { fontSize: "17px" },
                      })}
                    </Button>
                  </Box>
                </Box>
              </Button>
            </Box>
          ))
        ) : (
          <>
            {selectedPopup === 0 && <Primary onClose={handleClosePopup} />}
            {selectedPopup === 1 && <Primary onClose={handleClosePopup} />}
            {selectedPopup === 2 && <Primary onClose={handleClosePopup} />}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PricingPopup;
