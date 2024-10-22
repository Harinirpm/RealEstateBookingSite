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
        <Dropdown />
      </Box>
     {/* <Box sx={{ position: "relative", width: "210px", backgroundColor: "white" }}>
      <FormControl 
        variant="outlined" 
        sx={{
          width: "40%",
          height:"auto",
          backgroundColor: "white",
          border: "1px solid black",
          borderRadius: "4px",
          padding: "8px 12px",
          fontSize: "16px",
        }}
      >
        <InputLabel id="custom-select-label" sx={{ top: "-6px" }}>Age</InputLabel>
        <Select
          labelId="custom-select-label"
          id="custom-select"
          value={age}
          onChange={handleChange}
          label="Age"
          IconComponent={ExpandMoreIcon}
          sx={{
            appearance: "none",
            width: "100%",
            padding: "8px 0",
            fontSize: "16px",
            '& fieldset': {
              border: "none", // Remove the default border
            },
            '&:focus-visible': {
              border: "3px solid black", // Focused state
            },
            '& .MuiSelect-icon': {
              right: "10px",
              color: "black",
            },
          }}
        >
          <MenuItem value="" disabled>
            <em>Age</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl> 
     </Box>  */}
      
    </Box>
  );
}

export default Header;
