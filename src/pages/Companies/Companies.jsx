import React from "react";
import Header from "../../components/Header/Header";
import QuotationDetails from "../../components/QuotationDetails/QuotationDetails";
import Box from "@mui/material/Box";
import Button from "../../components/Button/Button";

function Companies() {
  return (

    <div style={{backgroundColor:"#F5F7FA"}}>
      <Header />
      <Box sx={{ mt: "2%", ml: "2%" }}>
        <QuotationDetails />

        <Box
          display="flex"
          backgroundColor="white"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          // gap={100}
          sx={{ height: "90px", width: "95.4%", padding: "0 20px" }}
        >
          <Box display="flex" flexDirection="row" padding="5px">
            <Button
              text="Previous"
              bgcolor="white"
              textcolor="black"
              // onClick={handleClick}
              sx={{
                margin: 2,
                boxShadow: "none",
                border: "1px solid #bdbfbe",
                fontWeight: 600,
                fontSize: "16px",
                height: "45px",
                width: "70%",
                borderRadius: "10px",
              }}
            />
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            sx={{ height: "80px", width: "100%", ml: "65%" }}
          >
            <Button
              text="cancel"
              bgcolor="white"
              textcolor="black"
              // onClick={handleClick}
              sx={{
                margin: 2,
                boxShadow: "none",
                border: "1px solid #bdbfbe",
                height: "45px",
                width: "40%",
                borderRadius: "10px",
                fontWeight: 600,
                fontSize: "16px",
              }}
            />
            <Button
              text="Crate Quotation"
              bgcolor="#5078E1"
              textcolor="white"
              // onClick={handleClick}
              sx={{
                margin: 2,
                boxShadow: "none",
                border: "1px solid #bdbfbe",
                hover: "none",
                height: "45px",
                width: "90%",
                borderRadius: "10px",
                fontWeight: 600,
                fontSize: "16px",
              }}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Companies;
