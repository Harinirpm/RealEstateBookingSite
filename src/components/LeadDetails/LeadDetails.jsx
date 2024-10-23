import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import Avatar1 from "../../assets/avatar1.png";
function LeadDetails() {
  return (
    <Box sx={{ padding: "5%" }}>
      <Typography
        sx={{ fontWeight: 640, fontSize: "20px", fontFamily: "Nunito Sans" }}
      >
        Lead Details
      </Typography>

      <Box
        sx={{
          height: "80px",
          width: "99%",
          backgroundColor: "white",
          border: "1px solid #E4E8EE",
          borderRadius: "10px",
          display: "flex",
          padding: "1px",
          alignItems: "center",
          mt: "20px",
        }}
      >
        <Avatar
          alt="Tom Cruise"
          src={Avatar1}
          sx={{ borderRadius: "10px", mr: "10px", width: 50, height: 50 }}
        />
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Box display="flex" alignItems="center">
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 640,
                fontFamily: "Nunito Sans",
              }}
            >
              Tom Cruise
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                backgroundColor: "#5078E11E",
                padding: "2px 8px",
                height: "auto",
                width: "auto",
                alignItems: "center",
                borderRadius: "8px",
                ml: "10px",
                fontFamily: "Nunito Sans",
              }}
            >
              Prospect
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mt: "2px" }}>
            <Typography
              sx={{
                color: "#4E5A6B",
                fontSize: "14px",
                fontFamily: "Nunito Sans",
              }}
            >
              +91 9090808012
            </Typography>
            <Typography sx={{ mx: "10px", color: "#bdbdbd", fontSize: "20px" }}>
              •
            </Typography>
            <Typography
              sx={{
                color: "#4E5A6B",
                fontSize: "14px",
                fontFamily: "Nunito Sans",
              }}
            >
              Tomcruise2515@gmail.com
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider sx={{width:"100%",mt:"20px"}} />
      <Typography
        sx={{
          fontWeight: 640,
          fontSize: "20px",
          mt: "20px",
          fontFamily: "Nunito Sans",
        }}
      >
        Quotation Details
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        sx={{ mt: "20px" }}
      >
        <Box display="flex" flexDirection="column">
          <Typography
            sx={{
              fontSize: "12px",
              color: "#98A0AC",
              fontFamily: "Nunito Sans",
            }}
          >
            LEASE START DATE
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: 600,
              mt: "10px",
              fontFamily: "Nunito Sans",
            }}
          >
            30 Jan 22
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column">
          <Typography
            sx={{
              fontSize: "12px",
              color: "#98A0AC",
              fontFamily: "Nunito Sans",
            }}
          >
            LEASE END DATE
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: 600,
              mt: "10px",
              fontFamily: "Nunito Sans",
            }}
          >
            30 Jan 23
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column">
          <Typography
            sx={{
              fontSize: "12px",
              color: "#98A0AC",
              fontFamily: "Nunito Sans",
            }}
          >
            RENT START DATE
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: 600,
              mt: "10px",
              fontFamily: "Nunito Sans",
            }}
          >
            30 Jan 23
          </Typography>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" sx={{ mt: "20px" }}>
        <Typography
          sx={{ fontSize: "12px", color: "#98A0AC", fontFamily: "Nunito Sans" }}
        >
          GRACE PERIOD
        </Typography>
        <Box display="flex" flexDirection="row" alignItems="center">
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 600,
              mt: "10px",
              fontFamily: "Nunito Sans",
            }}
          >
            90 Days
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              color: "#98A0AC",
              // ml: "10px",
              mt: "10px",
              fontFamily: "Nunito Sans",
            }}
          >
            (Beggining)
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default LeadDetails;
