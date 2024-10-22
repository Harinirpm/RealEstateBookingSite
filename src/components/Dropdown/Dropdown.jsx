import React from 'react'
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}; 

const names = [
    'Casagrand',
    'Leelaland',

  ];

  
function Dropdown() {

    const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
        <FormControl sx={{ m: 0, width: 200,maxHeight:1 ,border:"none",boxShadow:"none"}}>
        <Select
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <Typography>Casaland</Typography>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{
            height:"40px",
            width:"100%",
            borderRadius:"10px",
            backgroundColor:"#F5F7FA",
            // border:"none",
            border:"1px solid #F5F7FA",
            boxShadow:"none",
            '&.Mui-focused': {
        border: "1px solid #F5F7FA", 
        boxShadow:"none",
      },
      '&:hover': {
        border: "1px solid #F5F7FA", 
        boxShadow:"none",
      },
      "&:active": {
        border:"none",
      }
          }}
        >
          <MenuItem disabled value="" >
            <Typography>Casagrand</Typography>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
            //   style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      
    </div>
  )
}

export default Dropdown
