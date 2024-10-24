import React, { useEffect, useState } from "react";
import { Button, Box, DialogActions } from "@mui/material";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Divider,
} from "@mui/material";
// import Buttons from '../Button/Button';
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import Avatar from "@mui/material/Avatar";
import Avatar3 from "../../assets/avatar3.jpeg";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { MdOutlineHouseboat } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setAmenitiesTotal } from "../../store/PaymentSlice";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#65C466",
        opacity: 1,
        border: 0,
        ...theme.applyStyles("dark", {
          backgroundColor: "#2ECA45",
        }),
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.grey[100],
      ...theme.applyStyles("dark", {
        color: theme.palette.grey[600],
      }),
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
      ...theme.applyStyles("dark", {
        opacity: 0.3,
      }),
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#E9E9EA",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
    ...theme.applyStyles("dark", {
      backgroundColor: "#39393D",
    }),
  },
}));
const AddAmenities = ({ onClose }) => {
  const [switchStates, setSwitchStates] = useState(Array(10).fill(false));
  const [selectedRadio, setSelectedRadio] = useState(Array(10).fill(false));
  const [totalValue, setTotalValue] = useState(0);
  const [count, setCount] = useState(0);
  const [amenityTotal, setAmenityTotal] = useState(0);
  const dispatch = useDispatch();

  const handleSwitchChange = (index) => {
    const isSwitchOn = switchStates[index];
    if (isSwitchOn && selectedRadio[index]) {
      setTotalValue((prevValue) => prevValue - 20);
      setCount((prevCount) => prevCount - 1);
      setSelectedRadio((prevStates) =>
        prevStates.map((state, i) => (i === index ? false : state))
      );
    }
    setSwitchStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };
  const handleRadioChange = (index) => {
    const isCurrentlySelected = selectedRadio[index];
    const isSwitchOn = switchStates[index];
    if (isSwitchOn) {
     const updatedValue = isCurrentlySelected ? totalValue - 20 : totalValue + 20;
      const updatedCount = isCurrentlySelected ? count - 1 : count + 1;
      setTotalValue(updatedValue);
      setAmenityTotal(updatedValue);
      setCount(updatedCount);
      setSelectedRadio((prevStates) =>
        prevStates.map((state, i) => (i === index ? !state : state))
      );
    }
  };
console.log(amenityTotal);
  useEffect(()=> {
    dispatch(setAmenitiesTotal(amenityTotal));
  },[amenityTotal,dispatch] 
)
  const features = [
    {
      name: "Amenities name",
      cost: "$20.00",
      date: "Valid Feb 22 - 12 Feb 23",
    },
    {
      name: "Amenities name",
      cost: "$20.00",
      date: "Valid Feb 22 - 12 Feb 23",
    },
    {
      name: "Amenities name",
      cost: "$20.00",
      date: "Valid Feb 22 - 12 Feb 23",
    },
    {
      name: "Amenities name",
      cost: "$20.00",
      date: "Valid Feb 22 - 12 Feb 23",
    },
    {
      name: "Amenities name",
      cost: "$20.00",
      date: "Valid Feb 22 - 12 Feb 23",
    },
    {
      name: "Amenities name",
      cost: "$20.00",
      date: "Valid Feb 22 - 12 Feb 23",
    },
    {
      name: "Amenities name",
      cost: "$20.00",
      date: "Valid Feb 22 - 12 Feb 23",
    },
    {
      name: "Amenities name",
      cost: "$20.00",
      date: "Valid Feb 22 - 12 Feb 23",
    },
    {
      name: "Amenities name",
      cost: "$20.00",
      date: "Valid Feb 22 - 12 Feb 23",
    },
    {
      name: "Amenities name",
      cost: "$20.00",
      date: "Valid Feb 22 - 12 Feb 23",
    },
  ];

  return (
    <Box
      sx={{
        padding: "20px",
        backgroundColor: "white",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
      }}
    >
      <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "sticky",
            // padding:"16px",
            zIndex: 1,
          }}
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <DialogTitle sx={{ fontWeight: "800", fontSize: "16px" }}>
              Add Amenities
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
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            backgroundColor="#FEEAEA80"
            sx={{
              height: "10%",
              width: "82%",
              borderRadius: "7px",
              padding: "20px",
              mb: "10px",
              mt: "20px",
              ml: "20px",
            }}
          >
            <Box display="flex" flexDirection="row" alignItems="center">
              < MdOutlineHouseboat style={{ color: "#B3776D",fontSize:"35px", }} />
              <Typography
                color="#B3776D"
                sx={{
                  fontSize: "16px",
                  fontWeight: "600",
                  ml: "10px",
                  whiteSpace: "nowrap",
                }}
              >
                {`0${count}`}
              </Typography>
              <Typography
                color="#B3776D"
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  ml: "5px",
                  whiteSpace: "nowrap",
                }}
              >
                Total Amenity
              </Typography>
            </Box>

            <Box display="flex" ml={1}>
              <Typography
                color="#B3776D"
                sx={{ fontSize: "16px", fontWeight: "600",flexBasis:"50%", whiteSpace:"nowrap"}}
              >
                $ {totalValue.toFixed(2)}
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            mt={3}
            mb={3}
            sx={{
              position: "sticky",
              // top: 10,
              zIndex: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: "17px",
                position: "sticky",
                mb: "-10px",
                mt: "-10px",
                zIndex: 1000,
                ml: "20px",
              }}
            >
              Available Amenities
            </Typography>
          </Box>
        </Box>

        <DialogContent
          sx={{
            overflowY: "auto",
            msScrollbarWidth: "none",
            scrollbarWidth: "none",
          }}
        >
          {features.map((item, index) => (
            <Box
              overflowY="scroll"
              msScrollbarWidth="none"
              scrollbarWidth="none"
              key={index}
              sx={{
                width: "99%",
                backgroundColor: "white",
                border: "1px solid #E4E8EE",
                borderRadius: "10px",
                padding: "0px",
                alignItems: "center",
                // mt: "20px",
                mb: "20px",
                transition: "height 0.3s ease",
                height: switchStates[index] ? "130px" : "70px",
                alignItems: "center",
              }}
            >
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                mt={1}
              >
                <Box display="flex" flexDirection="row">
                  <Avatar
                    alt="Tom Cruise"
                    src={Avatar3}
                    sx={{
                      borderRadius: "8px",
                      ml: "10px",
                      mr: "10px",
                      width: 50,
                      height: 50,
                    }}
                  />
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                  >
                    <Box display="flex" alignItems="center">
                      <Typography
                        sx={{
                          fontSize: "15px",
                          fontWeight: 600,
                          fontFamily: "Nunito Sans",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.name}
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" sx={{ mt: "2px" }}>
                      <Typography
                        sx={{
                          color: "black",
                          fontSize: "14px",
                          fontFamily: "Nunito Sans",
                          // mr:"-5px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.cost}
                      </Typography>
                      <Typography
                        sx={{
                          mx: "10px",
                          color: "#bdbdbd",
                          fontSize: "20px",
                          mb: "3px",
                          mr: "3px",
                        }}
                      >
                        •
                      </Typography>
                      <Typography
                        sx={{
                          color: "black",
                          fontSize: "14px",
                          fontFamily: "Nunito Sans",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.date}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box>
                <FormControlLabel control={<IOSSwitch 
                checked={switchStates[index]} 
                onChange={() => 
                handleSwitchChange(index)} />} />
                </Box>
              </Box>

              <Box
                sx={{
                  display: switchStates[index] ? "flex" : "none",
                  flexDirection: switchStates[index] ? "column" : "none",
                  transition: "all 0.3s ease",
                  width: "100%",
                }}
              >
                <Divider sx={{ width: "100%", my: 1 }} />
                {switchStates[index] && (
                <Box sx={{ flexDirection: "column", }}>
                  <FormControl>
                    <FormControlLabel 
                    control={<Radio checked={selectedRadio[index]} 
                    sx={{ml:"20px"}}
                    onChange={() => handleRadioChange(index)} />} 
                    label="Free Applicable"/>
                  </FormControl>
                </Box>
              )}
              </Box>
            </Box>
          ))}

        </DialogContent>
        <DialogActions
        sx={{
          padding: "16px 24px",
          backgroundColor: "white",
        }}
      >
        <Button
          variant="contained"
          onClick={onClose}
          sx={{
            textTransform: "none",
            width: "100%",
            padding: "10px",
          }}
        >
          Update & Save
        </Button>
      </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AddAmenities;
