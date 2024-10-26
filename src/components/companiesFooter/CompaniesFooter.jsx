import React from 'react'
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Buttons from '../Button/Button';
function CompaniesFooter() {
  return (
    <Box
          display="flex"
          backgroundColor="white"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          zIndex={1}
        >
          <Box display="flex" flexDirection="row">
            <Buttons
              text="Previous"
              bgcolor="white"
              textcolor="black"
              
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
          >
            <Buttons
              text="Cancel"
              bgcolor="white"
              textcolor="black"
              
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
            <Buttons
              text="Crate Quotation"
              bgcolor="#5078E1"
              textcolor="white"
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
  )
}

export default CompaniesFooter
