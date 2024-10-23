import React from 'react'
import Grid2 from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
function Tooltip() {
    const [open, setOpen] = React.useState(false);
    const handleTooltipClose = () => {
      setOpen(false);
    };
    const handleTooltipOpen = () => {
      setOpen(true);
    };
  return (
    <Box>
      <Grid2 item>
          <Tooltip disableFocusListener title="Add">
            <Button>Hover or touch</Button>
          </Tooltip>
        </Grid2>
        </Box>
  )
}

export default Tooltip
