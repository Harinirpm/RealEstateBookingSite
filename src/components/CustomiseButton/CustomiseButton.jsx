import React, { useState } from "react";
import { Box, MenuItem, Popover, Divider, Button } from "@mui/material";
import PricingPopup from "../PricingPopup/PricingPopup";
import AddAmenities from "../AllPopup/AddAmenities";
import AddUtilities from "../AllPopup/AddUtilities";
import AddDiscount from "../AllPopup/AddDiscount";
import RemoveComponent from "../AllPopup/RemoveComponent";

const PricingMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [popupContent, setPopupContent] = useState(null);
  const [openpop, setOpenpop] = useState(false);

  const handleOpen = (event, content) => {
    setAnchorEl(null);
    setPopupContent(content);
    setOpenpop(true);
  };

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setPopupContent(null);
    setOpenpop(false);
  };

  const open = Boolean(anchorEl);

  return (
    <Box
      csx={{
        filter: openpop ? "blur(5px)" : "none",
        transition: "filter 0.3s ease-in-out",
      }}
    >
      <Button onClick={handlePopoverOpen} sx={{textTransform:"none"}}>
        + Customise
        </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        bottom="-80px"
        left="-90px"
        
      >
        <Box >
          <MenuItem onClick={(e) => handleOpen(e, "AddPricing")}  >
            Add Pricing Component
          </MenuItem>
          <Divider />
          <MenuItem onClick={(e) => handleOpen(e, "AddAmenities")}>
            Add Amenities
          </MenuItem>
          <Divider />
          <MenuItem onClick={(e) => handleOpen(e, "AddUtilities")}>
            Add Utilities
          </MenuItem>
          <Divider />
          <MenuItem onClick={(e) => handleOpen(e, "AddDiscount")}>
            Add Discount
          </MenuItem>
          <Divider />
          <MenuItem onClick={(e) => handleOpen(e, "RemoveComponent")}>
            Remove Component
          </MenuItem>
        </Box>
      </Popover>
      {popupContent === "AddPricing" && (
        <PricingPopup open={Boolean(popupContent)} onClose={handleClose} />
      )}
      {popupContent === "AddAmenities" && (
        <AddAmenities open={Boolean(popupContent)} onClose={handleClose} />
      )}
      {popupContent === "AddUtilities" && (
        <AddUtilities open={Boolean(popupContent)} onClose={handleClose} />
      )}
      {popupContent === "AddDiscount" && (
        <AddDiscount open={Boolean(popupContent)} onClose={handleClose} />
      )}
      {popupContent === "RemoveComponent" && (
        <RemoveComponent open={Boolean(popupContent)} onClose={handleClose} />
      )}
    </Box>
  );
};

export default PricingMenu;
