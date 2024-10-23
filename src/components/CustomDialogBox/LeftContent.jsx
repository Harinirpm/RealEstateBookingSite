import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid2,
  Box,
} from "@mui/material";
import TabletAndroidIcon from "@mui/icons-material/TabletAndroid";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ViewTimelineOutlinedIcon from "@mui/icons-material/ViewTimelineOutlined";
import Divider from "@mui/material/Divider";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useState } from "react";
// import Avatar1 from '../../assets/avatar1.png'

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}


const LeftContent = () => {
  const items = [
    { icon: <HotelOutlinedIcon sx={{ fontSize: "21px" }} />, text: "2" },
    { icon: <BathtubOutlinedIcon sx={{ fontSize: "21px" }} />, text: "2" },
    { icon: <HomeOutlinedIcon sx={{ fontSize: "21px" }} />, text: "2BHK" },
    {
      icon: <ViewTimelineOutlinedIcon sx={{ fontSize: "21px" }} />,
      text: "2000 Sq.Ft",
    },
  ];

  const itemData = [
    {
      id:1,
      img: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
      title: 'home1',
      rows: 2,
      cols: 2,
    },
    {
      id:2,
      img: 'https://i.pinimg.com/474x/2d/a4/28/2da428ddc43445902549a534762839c7.jpg',
      title: 'home2',
    },
    {
      id:3,
      img: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
      title: 'home3',
    },
    {
      id:4,
      img: 'https://thumbs.dreamstime.com/b/beautiful-exterior-home-pictures-new-design-images-modern-best-house-latest-front-wall-dream-168875259.jpg',
      title: 'home4',
    },
    {
      id:5,
      img: 'https://i.pinimg.com/474x/2d/a4/28/2da428ddc43445902549a534762839c7.jpg',
      title: 'home5',
    },
    
  ];

 

  return (
    <Card
      sx={{
        maxWidth: 665,
        borderRadius: 2,
        boxShadow: "none",
        //   height:'100vh',
        mt: -1.5,
        pt: -10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          // p: 2,
          alignItems: "center",
          borderTopLeftRadius: 2,
          borderTopRightRadius: 2,
        }}
      >
        <Box sx={{ display: "flex", width: "100%" }}>
        <ImageList
      sx={{ width: 500, }}
      variant="quilted"
      cols={4}
      rowHeight={80}
    >
      {itemData.map((item) => (
        <ImageListItem
        key={item.id}
        cols={item.cols || 1}
        rows={item.rows || 1}
        sx={{ position: "relative" }} 
      >
        <img
          {...srcset(item.img, 121, item.rows, item.cols)}
          alt={item.title}
          loading="lazy"
          style={{ width: "100%", height: "100%",borderRadius:"8px" }}
        />
        {item.id === 5 && 
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", 
            zIndex: 1, 
            textAlign:"center",
            justifyContent:"center",
            alignItems:"center",
            borderRadius:"8px"
          }}
        >
          <Typography sx={{color:"white",zIndex:1,fontSize:"21px",
           pt:"20px"}}>+8</Typography>
          </Box>
}
      </ImageListItem>
      ))}
    </ImageList>
        </Box>
      </Box>


      <CardContent sx={{ padding: 0 }}>
        <Box
          display={"flex"}
          sx={{ mt: "0rem", flexDirection: "row", alignItems: "center" }}
        >
          <Typography
            color="black"
            sx={{ fontWeight: "600", mt: "10px", fontSize: "19px" }}
          >
            Jumeirah Estate
          </Typography>
          <Typography
            backgroundColor="#f0f0f0"
            sx={{
              ml: 1,
              p: 0.8,
              pb: -3,
              height: "0.9rem",
              fontSize: "0.6rem",
              mt: 1,
              borderRadius: "4px",
              fontSize: "11px",
            }}
          >
            UNIT-1458
          </Typography>
        </Box>
        <Typography
          color="text.secondary"
          sx={{ fontSize: "16px", mt: "10px" }}
        >
          Rubix Apartment, K Tower, Floor 1
        </Typography>
        <Box display="flex" mb="-30px" alignItems="center">
          {items.map((item, index) => (
            <Box
              key={index}
              display="flex"
              alignItems="center"
              color="#e6e5e3"
              mt={2}
            >
              {item.icon}
              <Typography
                sx={{
                  color: "black",
                  ml: "10px",
                  fontSize: "14px",
                  mt: "5px",
                  fontWeight: "600",
                }}
              >
                {item.text}
              </Typography>
              {index !== items.length - 1 && (
                <Typography
                  sx={{
                    color: "#98A0AC",
                    fontSize: "20px",
                    mb: "-1px",
                    ml: "10px",
                    mr: "10px",
                  }}
                >
                  {"\u2022"}
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      </CardContent>
      <Divider sx={{ width: "100%", color: "gray", mt: "50px" }} />

      <Box
        mt={1}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ padding: 2 }}
        pl={-3}
        ml={-2.5}
      >
        <Box display="flex" alignItems="center">
          <TabletAndroidIcon
            style={{ fontSize: "1rem", color: "grey", marginLeft: "0.5rem" }}
          />
          <Typography variant="body2" component="span">
            Handbook
          </Typography>
        </Box>
        <Typography
          variant="body2"
          component="a"
          href="#"
          sx={{
            marginLeft: "10px",
            textDecoration: "underline",
            color: "primary.main",
            "&:hover": {
              textDecoration: "none",
            },
          }}
        >
          View / Download
        </Typography>
      </Box>
    </Card>
  );
};

export default LeftContent;
