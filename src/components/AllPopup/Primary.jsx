import React from 'react';
import { Button,Box } from '@mui/material';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Divider,
} from "@mui/material";
// import Buttons from '../Button/Button';
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
const Primary = ({ onClose }) => {
  return (
    <Box sx={{ padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.5)' }}>
      <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <DialogTitle sx={{ fontWeight: "600" }}>Pricing Table</DialogTitle>
        <ClearOutlinedIcon
          sx={{ fontSize: "27px", padding: "15px", cursor: "pointer",  color: "gray"}}
          onClick={onClose}
        />
      </Box>
      <Divider sx={{ width: "100%", color: "gray" }} />
      <DialogContent>      
      <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  backgroundColor="#FEEAEA80"
                  sx={{
                    height: "10%",
                    width: "92%",
                    borderRadius: "7px",
                    padding: "20px",
                    mb: "10px",
                  }}
                >
                    <Typography color="#B3776D" sx={{ fontSize: "20px" }}>
                    Primary Pricing Component
                    </Typography>
                      <InfoOutlinedIcon sx={{color:"#B3776D"}}/>
                  </Box>
                  <Box display="flex" flexDirection="row" padding="5px">
                    <Typography>Revenue Type</Typography>
                    <Typography>Pricing Component</Typography>
                    </Box>
                  <Box display="flex" flexDirection="row" padding="5px">
            <Button sx={{
                margin: 2,
                boxShadow: "none",
                border: "1px solid #bdbfbe",
                fontWeight: 600,
                fontSize: "16px",
                height: "45px",
                width: "70%",
                borderRadius: "10px",
              }}>Lease</Button>
            <Button sx={{
                margin: 2,
                boxShadow: "none",
                border: "1px solid #bdbfbe",
                fontWeight: 600,
                fontSize: "16px",
                height: "45px",
                width: "70%",
                borderRadius: "10px",
              }}>Sales</Button>
            <Button sx={{
                margin: 2,
                boxShadow: "none",
                border: "1px solid #bdbfbe",
                fontWeight: 600,
                fontSize: "16px",
                height: "45px",
                width: "70%",
                borderRadius: "10px",
              }}>Manage</Button>
          </Box>
      <Button variant="contained" onClick={onClose} sx={{ mt: '20px' }}>
        Back
      </Button>
      </DialogContent>
    </Dialog>
    </Box>
  );
};

export default Primary;
