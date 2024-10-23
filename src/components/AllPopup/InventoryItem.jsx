import React, { useState } from "react";
import { Button, Box } from "@mui/material";
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
import {
  TextField,
  InputAdornment,
} from "@mui/material";
import Dropdown from "../Dropdown/Dropdown";

const InventoryItem = ({ onClose }) => {
  const [activeButton, setActiveButton] = useState(null);
  const [componentBasedOn, setComponentBasedOn] = useState(null);

  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  const handleComponentBasedChange = (value) => setComponentBasedOn(value);

  const btnItems = [
    { id: "lease", text: "Lease" },
    { id: "sales", text: "Sales" },
    { id: "manage", text: "Manage" },
    { id: "stay", text: "Stay" },
  ];
  const options2 = ["Pricing Componenet", "GST", "Amount", "Total component"];

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
          <DialogTitle sx={{ fontWeight: "600", fontSize: "18px" }}>
            Pricing Table
          </DialogTitle>
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
            backgroundColor="#FFFAD880"
            sx={{
              height: "10%",
              width: "92%",
              borderRadius: "7px",
              padding: "20px",
              mb: "10px",
            }}
          >
            <Typography
              color="#B3A16D"
              sx={{ fontSize: "16px", fontWeight: "600" }}
            >
              Inventory Item Component
            </Typography>
            <InfoOutlinedIcon sx={{ color: "#B3A16D" }} />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            mt={3}
            mb={3}
          >
            <Typography variant="body2">Revenue Type</Typography>

            {/* <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" padding="5px"> */}
            <Box display="flex" flexDirection="row" mr="130px">
              {btnItems.map((btn) => (
                <Button
                  key={btn.id}
                  sx={{
                    margin: 0,
                    boxShadow: "none",
                    border: "1px solid #bdbfbe",
                    fontWeight: 600,
                    fontSize: "16px",
                    height: "46px",
                    mr: "10px",
                    mb: "10px",
                    mt: "10px",
                    width: "86%",
                    borderRadius: "5px",
                    padding: "5px",
                    textTransform: "none",
                    color: activeButton === btn.id ? "white" : "black",
                    backgroundColor: activeButton === btn.id ? "#5078E1" : "",
                  }}
                  onClick={() => handleClick(btn.id)}
                >
                  {btn.text}
                </Button>
              ))}
            </Box>
          </Box>
          <Box
            sx={{ display: "flex", flex: 2, justifyContent: "space-between" }}
          >
            <Box sx={{ marginBottom: "1.5rem", width: "45%" }}>
              <Typography
                variant="body2"
                sx={{ marginBottom: "0.5rem", fontWeight: 500 }}
              >
                Pricing Component
              </Typography>

              <Dropdown options={options2} placeholder="Pricing Componenet" />
            </Box>

            <Box sx={{ marginBottom: "1.5rem", width: "50%" }}>
              <Typography
                variant="body2"
                sx={{ marginBottom: "0.5rem", fontWeight: 500 }}
              >
                Tax Group For Pricing Component
              </Typography>

              <Dropdown options={options2} placeholder="Pricing Componenet" />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ marginBottom: "1.5rem", mr: "2rem" }}>
              <Typography
                variant="body2"
                sx={{
                  marginBottom: "0.5rem",
                  fontWeight: 500,
                  // color: "grey",
                  fontFamily: "Nunito Sans",
                }}
              >
                Pricing Based On
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "space-between" }}>
                <Button
                  sx={{
                    margin: 0,
                    boxShadow: "none",
                    border: "1px solid #bdbfbe",
                    fontWeight: 600,
                    fontSize: "16px",
                    width: "100%",
                    height: "46px",
                    mr: "10px",
                    mb: "10px",
                    mt: "10px",
                    padding: "20px",
                    borderRadius: "5px",
                    textTransform: "none",
                    color: componentBasedOn === "amount" ? "white" : "black",
                    backgroundColor:
                      componentBasedOn === "amount" ? "#5078E1" : "",
                    flexBasis: "100%",
                  }}
                  onClick={() => handleComponentBasedChange("amount")}
                >
                  Monthly
                </Button>
                <Button
                  sx={{
                    margin: 0,
                    boxShadow: "none",
                    border: "1px solid #bdbfbe",
                    fontWeight: 600,
                    fontSize: "16px",
                    width: "100%",
                    height: "46px",
                    mr: "10px",
                    mb: "10px",
                    mt: "10px",
                    padding: "20px",
                    borderRadius: "5px",
                    textTransform: "none",
                    color: componentBasedOn === "rental" ? "white" : "black",
                    backgroundColor:
                      componentBasedOn === "rental" ? "#5078E1" : "",
                    flexBasis: "100%",
                    whiteSpace: "nowrap",
                  }}
                  onClick={() => handleComponentBasedChange("rental")}
                >
                  Total
                </Button>
              </Box>
            </Box>
          </Box>


          <Box sx={{ alignItems: "center", marginBottom: "2rem" }}>
            <Typography
              variant="body2"
              sx={{
                flexGrow: 1,
                fontWeight: 500,
                mb: "20px",
                // color: "grey",
                fontFamily: "Nunito Sans",
              }}
            >
              Fixed Amount Value
            </Typography>

              <Box sx={{display:"flex", flexDirection:"row",alignItems:"center", justifyContent:"space-between",gap:"20px"}}>
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
                        $
                      </Typography>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: "8px",
                  "& .MuiInputBase-input": {
                    fontWeight: 600,
                  },
                }}
              />
            </Box>
            
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
                placeholder="10"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Typography variant="body2" sx={{ marginLeft: "0.5rem" }}>
                        QTY
                      </Typography>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: "8px",
                  "& .MuiInputBase-input": {
                    fontWeight: 600,
                  },
                }}
              />
            </Box>
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
                mt: "-20px",
                color: "black",
                border: "1px solid gray",
                textTransform: "none",
                fontWeight: 600,
                height: "45px",
                width: "100px",
              }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              onClick={onClose}
              sx={{ mt: "-20px", textTransform: "none", height: "45px" }}
            >
              Create Pricing component
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default InventoryItem;
