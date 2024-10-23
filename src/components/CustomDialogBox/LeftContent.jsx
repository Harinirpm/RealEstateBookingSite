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
          p: 2,
          alignItems: "center",
          borderTopLeftRadius: 2,
          borderTopRightRadius: 2,
        }}
      >
        <Box sx={{ display: "flex", width: "22rem" }}>
          <CardMedia
            component="img"
            alt="Property Image 1"
            height="150"
            image="https://images.unsplash.com/photo-1494526585095-c41746248156?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8fDA%3D"
            sx={{ flex: 1, marginRight: 1, borderRadius: 1 }}
          />
        </Box>
        <Box display="flex" flexDirection="column" sx={{ padding: 0.5 }}>
          <Grid2 container spacing={1}>
            <Grid2 item xs={6}>
              <CardMedia
                component="img"
                alt="Property Image 1"
                height="70"
                width="100"
                image="https://images.unsplash.com/photo-1444676632488-26a136c45b9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fHww"
                sx={{ borderRadius: 1 }}
              />
            </Grid2>
            <Grid2 item xs={6}>
              <CardMedia
                component="img"
                alt="Property Image 2"
                height="70"
                width="100"
                image="https://images.unsplash.com/photo-1504615755583-2916b52192a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8fDA%3D"
                sx={{ borderRadius: 1 }}
              />
            </Grid2>
            <Grid2 item xs={6}>
              <CardMedia
                component="img"
                alt="Property Image 3"
                height="70"
                image="https://images.unsplash.com/photo-1444676632488-26a136c45b9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fHww"
                sx={{ borderRadius: 1 }}
              />
            </Grid2>
            <Grid2 item xs={6}>
              <CardMedia
                component="img"
                alt="Property Image 4"
                height="70"
                image="https://images.unsplash.com/photo-1444676632488-26a136c45b9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fHww"
                sx={{ borderRadius: 1 }}
              />
            </Grid2>
          </Grid2>
        </Box>
      </Box>
      <CardContent sx={{ padding: 1 }}>
        <Box
          display={"flex"}
          sx={{ mt: "-1.5rem", flexDirection: "row", alignItems: "center" }}
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
      <Divider sx={{ width: "100%", color: "gray", mt: "30px" }} />

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
