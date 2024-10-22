import React from 'react';
import { Box, Typography, InputLabel, MenuItem, FormControl, Select, OutlinedInput } from '@mui/material';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Dropdown from '../Dropdown/Dropdown';

function Header() 
{
  const [age, setAge] = React.useState('');

  const handleChange = (event) => 
  {
    setAge(event.target.value);
  };
  const options1 = ['Casagrand', 'Leelaland'];

  return (
    <Box
      sx={{
        height: "60px",
        width: "100%",
        backgroundColor: "white",
        borderBottom: "1px solid #ebebeb",
        margin: 0,
        padding: 0,
        // mt: "-10px",
        // ml: "80px",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <Box
        sx={{ alignItems: "center", display: "flex", flexDirection: "row" }}
      >
        <ChevronLeftIcon
          sx={{
            color: "#787575",
            height: "30px",
            width: "30px",
            borderRadius: "50%",
            backgroundColor: "#ededed",
            ml: "30px",
          }}
        />
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: "18px",
            ml: "10px",
          }}
        >
          Create Quotation To Existing Lead
        </Typography>
      </Box>
      <Box sx={{ position: "relative", width: "210px", backgroundColor: "white" }}>

        <Dropdown options={options1} placeholder='Casagrand'/>
      </Box>
    </Box>
  );
}

export default Header;
