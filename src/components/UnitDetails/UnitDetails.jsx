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

  const [landDetails, setLandDetails] = useState([
    {
      id: 1,
      name: "Jusmaria Estate",
      price: "$ 1,200",
      estatename: " Jumeirah Golf Estate",
      sqft: "2000 Sq.Ft",
    },
    {
      id: 2,
      name: "Jusmaria Estate",
      price: "$ 1,200",
      estatename: " Jumeirah Golf Estate",
      sqft: "2000 Sq.Ft",
    },
    {
      id: 3,
      name: "Jusmaria Estate",
      price: "$ 1,200",
      estatename: " Jumeirah Golf Estate",
      sqft: "2000 Sq.Ft",
    },
    {
      id: 4,
      name: "Jusmaria Estate",
      price: "$ 1,200",
      estatename: " Jumeirah Golf Estate",
      sqft: "2000 Sq.Ft",
    },
  ]);

  const items = [
    { icon: <HotelOutlinedIcon sx={{ fontSize: "20px" }} />, text: "2" },
    { icon: <BiBath sx={{ fontSize: "20px" }} />, text: "2" },
    { icon: <HomeOutlinedIcon sx={{ fontSize: "20px" }} />, text: "2BHK" },
  ];

  const handleClickOpen = (land) => {
    setSelectedLand(land);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (id) => {
    const updatedLandDetails = landDetails.filter(
      (land) => land.id !== id
    );
    setLandDetails(updatedLandDetails);
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
        {landDetails.map((land) => (
          <Card
            key={land.id}
            sx={{
              // maxWidth: 390,
              // width:"92%",
              borderRadius: "8px",
              boxShadow: "none",
              border: "1px solid #e1e3e6",
              
            }}
          >
            <Button
              
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
                  width: 228,
                  padding:"0px",
                  borderRadius: "8px",
                  position: "relative",
                  mt:"3px",
                  cursor:"pointer"
                }}
                onClick={() => handleClickOpen(land)} 
                image={RoomImg}
                title="room"
                >
                <Box
                  sx={{
                    height: "30px",
                    width: "30px",
                    borderRadius: "50%",
                    backgroundColor: "#f0eeed",
                    color: "red",
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer", 
                  }}
                  onClick={(e) => {
                    e.stopPropagation(); 
                    handleDelete(land.id);
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
                  sx={{ color: "#bdbdbd", fontSize: "20px", mb: "0px" }}
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
                    sx={{
                      fontSize:"20px"
                    }}
                  >
                    {item.icon}
                    <Typography sx={{ color: "#98A0AC", ml: "10px",fontSize:"15px" }}>
                      {item.text}
                    </Typography>
                    {index !== items.length - 1 && (
                      <Typography
                        sx={{
                          color: "#bdbdbd ",
                          fontSize: "20px",
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
              sx={{ alignItems: "center", justifyContent: "center",mt:"10px" }}
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
