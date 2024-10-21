import Box from "@mui/material/Box";
import React from "react";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import Grid2 from "@mui/material/Grid2";

import LeadDetails from "../LeadDetails/LeadDetails";
import QuotationSummary from "../QuotationSummary/QuotationSummary";
import { Typography } from "@mui/material";
import UnitDetails from "../UnitDetails/UnitDetails";
function QuotationDetails() {
  return (
    <Box sx={{ height: "70vh" }}>
      <Box
        sx={{
          height: "105%",
          width: "98%",
          backgroundColor: "#F5F7FA",
          display: "flex",
          borderRadius: "10px",
          boxShadow: "0px 1px 10px 0px #F5F7FA",
          flexDirection: "column",
        }}
      >
        <BreadCrumbs />
        {/*Grid */}
        <Box
          sx={{
            width: "100%",
            height: "80%",
            marginTop: 0,
            borderTop: "2px solid  #F5F7FA",
          }}
        >
          <Grid2
            container
            rowSpacing={7}
            columnSpacing={{ xs: 1, sm: 1, md: 2 }}
            flexGrow={1}
            marginTop={0}
          >
            {/* section 1*/}
            <Grid2
              xs={6}
              flex={1}
              sx={{
                backgroundColor: "white",
                overflow: "hidden",
              }}
            >
              <LeadDetails />
            </Grid2>

            {/* section 2*/}
            <Grid2
              xs={6}
              flex={1}
              sx={{
                backgroundColor: "#F5F7FA",
                height: "60vh",
                borderRadius: "10px",
                mt: "3px",
                overflowY:"scroll",
                scrollbarWidth:"none",
              }}
            >
              <Box
                sx={{
                  // ml: "10px",
                  display: "flex",
                  flexDirection: "column",
                 
                  
                }}
              >
                <Box sx={{position:"fixed",
                    zIndex:"1000",
                    backgroundColor:"#F5F7FA",
                    height:"50px",
                    width:"30%",
                    
                    }}>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    mt:"10px",
                  }}
                >
                  Unit Details
                </Typography>
                </Box>
                <Box sx={{mt:"30px"}}>
                <UnitDetails />
                </Box>
              </Box>
            </Grid2>

            {/* section 3*/}
            <Grid2
              md={6}
              flex={1}
              sx={{
                backgroundColor: "white",
                height: "70vh",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px",
                  backgroundColor: "white",
                  ml: "20px",
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                    mt: "20px",
                    fontSize: "20px",
                    letterSpacing: "1px",
                  }}
                >
                  Quotation Summary
                </Typography>
              </Box>
              <QuotationSummary />
            </Grid2>
          </Grid2>
        </Box>
      </Box>
    </Box>
  );
}

export default QuotationDetails;
