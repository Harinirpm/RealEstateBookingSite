import React from "react";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function BreadCrumbs() {
  const breadcrumbs = [
    <Link key="1" underline="hover" href="/"sx={{ color: "blue", fontSize: "20px", ml: 4,mr:2,display:"flex",flexDirection:"row",alignItems:"center"}}>
      Add Contact
    </Link>,
    <Link key="1" underline="hover" href="/"sx={{ color: "blue", fontSize: "20px", ml: 2,mr:2,display:"flex",flexDirection:"row",alignItems:"center",}}>
    Lead Details
  </Link>,
  <Link key="1" underline="hover" href="/"sx={{ color: "blue", fontSize: "20px", ml: 2,mr:2,display:"flex",flexDirection:"row",alignItems:"center"}}>
  Preview and Create Lead
</Link>,
<Link key="1" underline="hover" href="/"sx={{ color: "blue", fontSize: "20px", ml: 2,mr:2,display:"flex",flexDirection:"row",alignItems:"center"}}>
Quotation Details
  </Link>,
  <Link key="1" underline="hover" href="/"sx={{ color: "blue", fontSize: "20px", ml: 2,mr:2,display:"flex",flexDirection:"row",alignItems:"center"}}>
 <Badge badgeContent={4} color="primary" sx={{mr:"20px"}}/> Preview and Create
</Link>,
  ];
  return (
    <Stack>
      <Breadcrumbs
        separator="›"
        label="breadcrumb"
        color="#5078E1"
        sx={{
          fontSize: "40px",
          ml: 0,
          mt: 0,
          // height:"190%",
          borderTopLeftRadius:"10px",
          borderTopRightRadius:"10px",
          display: "flex",
          flexDirection: "row",
          backgroundColor: "white",
          padding: "10px 0", 
          alignItems:"center"
        }}
      >
        
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}

export default BreadCrumbs;
