import React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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

function Dropdown({ options = [], placeholder = "Select...", label = "Dropdown" }) {
  const theme = useTheme();
  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedOptions(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl 
        sx={{
          m: 0, 
          width: '90%', 
          maxWidth: 300, 
          border: "none", 
          boxShadow: "none" 
        }}
      >
        <Select
          
          displayEmpty
          value={selectedOptions}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <Typography>{placeholder}</Typography>;
            }
            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': label }}
          IconComponent={KeyboardArrowDownIcon} 
          sx={{
            height: "45px",
            width: "100%", 
            borderRadius: "5px", 
            backgroundColor: "white", 
            // border: "1px solid #ccc", 
            boxShadow: "none",
            padding: "8px 12px", 
            '&.Mui-focused': {
              border: "1px solid black", 
              boxShadow: "none",
            },
            '&:hover': {
              border: "1px solid #999", 
              boxShadow: "none",
            },
            "&:active": {
              border: "none",
            },
            '& .MuiInputBase-input': {
                    fontWeight: 600, 
                  },
          }}
        >
          <MenuItem disabled value="">
            <Typography>{placeholder}</Typography>
          </MenuItem>
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Dropdown;
