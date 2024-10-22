import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import RoomImg from "../../assets/room.jpg";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import { BiBath } from "react-icons/bi";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DialogBox from "../CustomDialogBox/DialogBox";
import CustomiseButton from "../CustomiseButton/CustomiseButton";

function UnitDetails() {
  const [open, setOpen] = useState(false);
  const [selectedLand, setSelectedLand] = useState(null);

  const landDetails = [
    {
      name: "Jusmaria Estate",
      price: "$ 1,200",
      estatename: " Jumeirah Golf Estate",
      sqft: "2000 Sq.Ft",
    },
    {
      name: "Jusmaria Estate",
      price: "$ 1,200",
      estatename: " Jumeirah Golf Estate",
      sqft: "2000 Sq.Ft",
    },
    {
      name: "Jusmaria Estate",
      price: "$ 1,200",
      estatename: " Jumeirah Golf Estate",
      sqft: "2000 Sq.Ft",
    },
    {
      name: "Jusmaria Estate",
      price: "$ 1,200",
      estatename: " Jumeirah Golf Estate",
      sqft: "2000 Sq.Ft",
    },
  ];

  const items = [
    { icon: <HotelOutlinedIcon />, text: "2" },
    { icon: <BiBath />, text: "2" },
    { icon: <HomeOutlinedIcon />, text: "2BHK" },
  ];

  const handleClickOpen = (land) => {
    setSelectedLand(land);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      className={open ? "blur-background" : ""}
      sx={{
        mt: "20px",
        overflowY: "scroll",
        msScrollbarWidth: "none",
        scrollbarWidth: "none",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "10px",
        }}
      >
        {landDetails.map((land, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: 390,
              borderRadius: "8px",
              boxShadow: "none",
              border: "1px solid #e1e3e6",
            }}
          >
            <Button
              onClick={() => handleClickOpen(land)}
              disableTouchRipple
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                  boxShadow: "none",
                },
                textTransform: "none",
              }}
            >
              <CardMedia
                sx={{
                  height: 150,
                  width: 227,
                  ml: "1px",
                  mt: "1px",
                  mr: "20px",
                  borderRadius: "8px",
                  position: "relative",
                }}
                image={RoomImg}
                title="room"
              >
                <Box
                  sx={{
                    height: "30px",
                    width: "30px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                    color: "red",
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <DeleteOutlinedIcon sx={{ fontSize: "20px", mt: "1px" }} />
                </Box>
              </CardMedia>
            </Button>
            <CardContent sx={{ mt: "-10px" }}>
              <Box display="flex" justifyContent="space-between">
                <Typography gutterBottom sx={{ fontWeight: "600" }}>
                  {land?.name}
                </Typography>
                <Typography gutterBottom sx={{ fontWeight: "600" }}>
                  {land?.price}
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                sx={{ mt: "-10px" }}
              >
                <Typography
                  sx={{ fontWeight: "500", color: "#98A0AC", fontSize: "13px" }}
                >
                  {land.estatename}
                </Typography>
                <Typography
                  sx={{ color: "#98A0AC", fontSize: "20px", mb: "7px" }}
                >
                  {"\u2022"}
                </Typography>
                <Typography
                  sx={{ fontWeight: "500", color: "#98A0AC", fontSize: "10px" }}
                >
                  {land.sqft}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" mb="-30px">
                {items.map((item, index) => (
                  <Box
                    key={index}
                    display="flex"
                    alignItems="center"
                    color="#98A0AC"
                    fontSize={20}
                  >
                    {item.icon}
                    <Typography sx={{ color: "#98A0AC", ml: "10px" }}>
                      {item.text}
                    </Typography>
                    {index !== items.length - 1 && (
                      <Typography
                        sx={{
                          color: "#98A0AC",
                          fontSize: "20px",
                          mb: "7px",
                          ml: "10px",
                        }}
                      >
                        {"\u2022"}
                      </Typography>
                    )}
                  </Box>
                ))}
              </Box>
            </CardContent>
            <CardActions
              sx={{ alignItems: "center", justifyContent: "center" }}
            >
              <CustomiseButton />
            </CardActions>
          </Card>
        ))}
      </Box>

      {selectedLand && (
        <DialogBox
          open={open}
          onClose={handleClose}
          selectedLand={selectedLand}
        />
      )}
    </Box>
  );
}

export default UnitDetails;
