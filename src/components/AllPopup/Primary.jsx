import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Divider,
} from "@mui/material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import {
  TextField,
  InputAdornment,
  LinearProgress,
} from "@mui/material";

import { linearProgressClasses } from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import Dropdown from "../Dropdown/Dropdown";

const Primary = ({ onClose }) => {
  const [activeButton, setActiveButton] = useState(null);
  const [componentBasedOn, setComponentBasedOn] = useState(null);
  
  const handleComponentBasedChange = (value) => setComponentBasedOn(value);

  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const BorderLinearProgress = styled(LinearProgress)(({ theme, color }) => ({
    height: 5,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200],
      ...theme.applyStyles("dark", {
        backgroundColor: theme.palette.grey[800],
      }),
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: color || "#1a90ff",
      ...theme.applyStyles("dark", {
        backgroundColor: color || "#308fe8",
      }),
    },
  }));
 const options2 = ["Pricing Componenet","GST", "Amount","Total component"];

  return (
    <Box
      sx={{
        padding: "20px",
        backgroundColor: "white",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
      }}
    >
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
            sx={{
              fontSize: "27px",
              padding: "15px",
              cursor: "pointer",
              color: "gray",
            }}
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
            <Typography color="#B3776D" sx={{ fontSize: "16px",fontWeight:"600" }}>
              Primary Pricing Component
            </Typography>
            <InfoOutlinedIcon sx={{ color: "#B3776D" }} />
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Box sx={{display:"flex",flexDirection:"column"}}>
            <Typography>Revenue Type</Typography>
            <Box display="flex" flexDirection="row">
              <Button
                sx={{
                  margin: 0,
                  boxShadow: "none",
                  border: "1px solid #bdbfbe",
                  fontWeight: 600,
                  fontSize: "16px",
                  width: "90%",
                  height: "46px",
                  mr:"10px",
                  mb:"10px",
                  mt:"10px",
                  borderRadius: "5px",
                  padding: "5px",
                  textTransform: "none",
                  color: activeButton === "lease" ? "white" : "black",
                  backgroundColor: activeButton === "lease" ? "#5078E1" : "",
                }}
                onClick={() => handleClick("lease")}
              >
                Lease
              </Button>
              <Button
                sx={{
                  margin: 0,
                  boxShadow: "none",
                  border: "1px solid #bdbfbe",
                  fontWeight: 600,
                  fontSize: "16px",
                  width: "90%",
                  height: "46px",
                  mr:"10px",
                  mb:"10px",
                  mt:"10px",
                  padding: "5px",
                  borderRadius: "5px",
                  textTransform: "none",
                  color: activeButton === "sales" ? "white" : "black",
                  backgroundColor: activeButton === "sales" ? "#5078E1" : "",
                }}
                onClick={() => handleClick("sales")}
              >
                Sales
              </Button>
              <Button
                sx={{
                  margin: 0,
                  boxShadow: "none",
                  border: "1px solid #bdbfbe",
                  fontWeight: 600,
                  fontSize: "16px",
                  width: "90%",
                  height: "46px",
                  mr:"10px",
                  mb:"10px",
                  mt:"10px",
                  padding: "15px",
                  borderRadius: "5px",
                  textTransform: "none",
                  color: activeButton === "manage" ? "white" : "black",
                  backgroundColor: activeButton === "manage" ? "#5078E1" : "",
                }}
                onClick={() => handleClick("manage")}
              >
                Manage
              </Button>
            </Box>
              </Box>
            <Box sx={{ marginBottom: "0rem", ml: "1.5rem", flex: 2,display:"flex",flexDirection:"column"}}>
            <Typography sx={{mb:"10px"}}>Pricing Components</Typography>
            <Dropdown options={options2} placeholder="Pricing Componenet"/>
            </Box>
          </Box>
         
          <Box sx={{ display: "flex", flex: 2 ,flexDirection:"row",alignItems:"center",mt:"1rem"}}>
            <Box sx={{ marginBottom: "0rem", width: "50%" }}>
              <Typography
                variant="body2"
                sx={{ marginBottom: "0.5rem", fontWeight: 500 }}
              >
                Tax Group For Pricing Component
              </Typography>

              <Dropdown options={options2} placeholder="GST"/>
            </Box>

            <Box sx={{ marginBottom: "0rem", ml: "0rem", display:"flex",flexDirection:"column",mt:"10px"}}>
              <Typography
                variant="body2"
                sx={{ marginBottom: "0rem", fontWeight: 500 }}
              >
                Component Based On
              </Typography>
              <Box display="flex">
                <Button sx={{
                  margin: 0,
                  boxShadow: "none",
                  border: "1px solid #bdbfbe",
                  fontWeight: 600,
                  fontSize: "16px",
                  width: "90%",
                  height: "46px",
                  mr:"10px",
                  // mb:"10px",
                  mt:"10px",
                  padding: "15px",
                  borderRadius: "5px",
                  textTransform: "none",
                 color: componentBasedOn === "amount" ? "white" : "black",
                      backgroundColor:
                        componentBasedOn === "amount" ? "#5078E1" : "",
                      flexBasis: "100%",
                    }}
                    onClick={() => handleComponentBasedChange("amount")}
                value="Amount">
                  Amount
                  </Button>
                <Button sx={{
                  margin: 0,
                  boxShadow: "none",
                  border: "1px solid #bdbfbe",
                  fontWeight: 600,
                  fontSize: "16px",
                  width: "90%",
                  height: "46px",
                  mr:"10px",
                  mb:"10px",
                  mt:"10px",
                  padding: "15px",
                  borderRadius: "5px",
                  textTransform: "none",
                  color: componentBasedOn === "uom" ? "white" : "black",
                  backgroundColor:
                    componentBasedOn === "uom" ? "#5078E1" : "",
                  flexBasis: "100%",
                }}
                onClick={() => handleComponentBasedChange("uom")}
                value="UOM"
                >
                  UOM
                </Button>
              </Box>
            </Box>
          </Box>
          <Box sx={{ alignItems: "center", marginBottom: "2rem",mt:"1rem" }}>
            <Typography
              variant="body2"
              sx={{ flexGrow: 1, fontWeight: 500, mb: "4px" }}
            >
              UOM Value
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "2rem",
                flex: 1,
              }}
            >
              <TextField
                variant="outlined"
                size="small"
                width="40rem"
                fullWidth
                // value="200"
                placeholder="200"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Typography variant="body2" sx={{ marginLeft: "0.5rem" }}>
                        $/Monthly
                      </Typography>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: "8px",
                  '& .MuiInputBase-input': {
                    fontWeight: 600, 
                  },
                }}
              />
            </Box>
          </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "2rem",
               
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "30%",
                  borderRadius: "8px",
                  padding: "0.5rem",
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  Maximum
                </Typography>
                <Box sx={{ width: "100%" }}>
                  <BorderLinearProgress
                    variant="determinate"
                    value={100}
                    color="red"
                  />
                </Box>
                <TextField
                  // value="$ 190"
                  placeholder="$190"
                  size="small"
                  sx={{
                    marginTop: "0.5rem",
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    '& .MuiInputBase-input': {
                    fontWeight: 600, 
                  },
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 500,
                    fontSize: 10,
                    mt: "5px",
                    color: "grey",
                  }}
                >
                  Sq.Yard/Monthly
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "30%",
                  borderRadius: "8px",
                  padding: "0.5rem",
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  Recommended
                </Typography>
                <BorderLinearProgress
                  variant="determinate"
                  value={70}
                  color="lightgreen"
                />

                <TextField
                  // value="$ 120"
                  placeholder="$100"
                  size="small"
                  sx={{
                    marginTop: "0.5rem",
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    '& .MuiInputBase-input': {
                    fontWeight: 600, 
                  },
                  }}
                />
                <Typography
                  variant="body2"

                  sx={{
                    fontWeight: 500,
                    fontSize: 10,
                    mt: "5px",
                    color: "grey",
                  }}
                >
                  Sq.Yard/Monthly
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "30%",
                  borderRadius: "8px",
                  padding: "0.5rem",
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  Minimum
                </Typography>
                <BorderLinearProgress
                  variant="determinate"
                  value={40}
                  color="orange"
                />

                <TextField
                  // value="$ 100"
                  placeholder="$100"

                  size="small"
                  sx={{
                    marginTop: "0.5rem",
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    '& .MuiInputBase-input': {
                    fontWeight: 600, 
                  },
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 500,
                    fontSize: 10,
                    mt: "5px",
                    color: "grey",
                  }}
                >
                  Sq.Yard/Monthly
                </Typography>
              </Box>
            </Box>
          
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Button
              variant="outlined"
              onClick={onClose}
              sx={{
                mt: "10px",
                color: "black",
                border: "1px solid gray",
                textTransform: "none",
                fontWeight:600,height:"45px",
                width:"100px",
                          }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              onClick={onClose}
              sx={{ mt: "10px", textTransform: "none",height:"45px", }}
            >
              Create Pricing component
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Primary;
