import React from "react";
import Header from "../../components/Header/Header";
import QuotationDetails from "../../components/QuotationDetails/QuotationDetails";
import Box from "@mui/material/Box";
import Button from "../../components/Button/Button";
import CompaniesFooter from "../../components/companiesFooter/CompaniesFooter";

function Companies() {
  return (

    <div style={{}}>
      <Header />
      <Box sx={{padding:"20px"}}>
        <QuotationDetails />
        {/* <CompaniesFooter /> */}
      </Box>
    </div>
  );
}

export default Companies;
