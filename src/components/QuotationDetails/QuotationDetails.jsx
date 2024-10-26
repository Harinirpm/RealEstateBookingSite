import Box from "@mui/material/Box";
import React from "react";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import Grid2 from "@mui/material/Grid2";
import LeadDetails from "../LeadDetails/LeadDetails";
import QuotationSummary from "../QuotationSummary/QuotationSummary";
import { Typography } from "@mui/material";
import UnitDetails from "../UnitDetails/UnitDetails";
import CompaniesFooter from "../companiesFooter/CompaniesFooter";

function QuotationDetails() {
  return (
    <Box
      sx={{
        height: "80vh",
        borderRadius: "10px",
        boxShadow: "0px 1px 10px 0px #F5F7FA",
        backgroundColor: "white",
        display:"flex",
        flexDirection:"column",
        position:"fixed",
        width:"91%",
        // padding:"20px",
        mt:"60px",
        borderRadius:"10px",
        ml:"20px",
      }}
    >
      <Box
        sx={{ flex: 1, overflow: "hidden", paddingBottom: "16px" }}
      >
        <BreadCrumbs />
        <Box
          sx={{
            width: "100%",
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
            flexShrink= {0}
          >
            <Grid2
              xs={6}
              flex={1}
              sx={{
                backgroundColor: "white",
                overflow: "hidden",
                height: "60vh",
                mt: "3px",
                overflowY: "scroll",
                scrollbarWidth: "none",
              }}
            >
              <LeadDetails />
            </Grid2>
            <Grid2
              xs={6}
              flex={1}
              sx={{
                backgroundColor: "#F5F7FA",
                height: "60vh",
                mt: "3px",
                overflowY: "scroll",
                scrollbarWidth: "none",
              }}
            >
              <Box
                sx={{
                  // ml: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    position: "fixed",
                    zIndex: "1000",
                    backgroundColor: "#F5F7FA",
                    height: "50px",
                    width: "30%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      mt: "10px",
                    }}
                  >
                    Unit Details
                  </Typography>
                </Box>
                <Box sx={{ mt: "30px" }}>
                  <UnitDetails />
                </Box>
              </Box>
            </Grid2>
            <Grid2
              md={6}
              flex={1}
              sx={{
                backgroundColor: "white",
                height: "60vh",
                mt: "3px",
                overflowY: "scroll",
                scrollbarWidth: "none",
              }}
              >
              <Box
                sx={{
                  position: "fixed",
                    zIndex: "1000",
                  display: "flex",
                  justifyContent: "space-between",
                  height: "50px",
                  width: "28%",
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
              <Box sx={{ mt: "70px" }}>
              <QuotationSummary />
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </Box>
      <Box sx={{backgroundColor:"white", border:"none"}}>
        <CompaniesFooter />
      </Box>
    </Box>
  );
}

export default QuotationDetails;
