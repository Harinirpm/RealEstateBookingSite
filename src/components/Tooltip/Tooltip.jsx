import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import { withStyles } from "@material-ui/core/styles";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Box from '@mui/material/Box';

function TooltipComponent() {

const TextOnlyTooltip = withStyles({
tooltip: {
color: "black",
backgroundColor: "white",
border: "1px solid lightgrey",
width: "15rem",
fontFamily: "Nunito Sans",
// mt:"80px"
},
})(Tooltip);
return (
    <Box>
<TextOnlyTooltip
  title="Base rent or Monthly rent you can have only one primary pricing table per property"
  placement="top"
  sx={{
    "& .MuiTooltip-tooltip": {
      backgroundColor: "#ffffff",
      color: "grey",
      border: "1px solid lightgrey",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
    },
    "& .MuiTooltip-arrow": {
      color: "white",
    },
  }}
>
  <InfoOutlinedIcon sx={{ cursor: "pointer", color: "#CED3DD",mt:"9px",mr:"5px",
    "&:hover":{
      color: "gray"
    }
   }} />
</TextOnlyTooltip>
</Box>
  )
}

export default TooltipComponent
