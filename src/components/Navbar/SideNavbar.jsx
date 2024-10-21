import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TopNavbar from "./TopNavbar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupsIcon from "@mui/icons-material/Groups";
import Person4Icon from "@mui/icons-material/Person4";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import SellIcon from "@mui/icons-material/Sell";
import SettingsIcon from "@mui/icons-material/Settings";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import { Link, useLocation } from "react-router-dom";

const drawerWidth = 340;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen * 2,
  }),
  overflowX: "hidden",
  marginTop: "67px",
  backgroundColor: "#333333",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen * 2,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 24px)`,
  },
  marginTop: "67px",
  backgroundColor: "#333333",
  msScrollbarWidth:"none",scrollbarWidth:"none",
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  border: "none",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),

  backgroundColor: "#333333",
}));

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
  { text: "Companies", icon: <GroupsIcon />, path: "/companies" },
  { text: "Owners", icon: <Person4Icon />, path: "/owners" },
  { text: "Properties", icon: <CorporateFareIcon />, path: "/properties" },
  { text: "Pricing", icon: <SellIcon />, path: "/pricing" },
  { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
  { text: "Data Management", icon: <CloudUploadIcon />, path: "/data-management" },
  { text: "Report", icon: <ReceiptLongIcon />, path: "/reports" },
  { text: "Document", icon: <FolderCopyIcon />, path: "/documents" },
  { text: "Communications", icon: <GroupsIcon />, path: "/communications" },
];

function SideNavbar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const location = useLocation();

  return (  
    <Box sx={{ display: "flex", }}>
      <Drawer variant="permanent" open={open}>
        <Box
          display="flex"
          flexDirection="row-reverse"
          backgroundColor="#333333"
          sx={{msScrollbarWidth:"none",scrollbarWidth:"none"}}
         
        >
          <DrawerHeader sx={{ ml: "10px", mr: "1%" }}>
            {open && (
              <IconButton onClick={handleDrawerClose} mr="90px">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    alignItems: "center",
                    width: "100%",
                    ml: "10px",
                    gap: "0px",
                  }}
                >
                  <ChevronLeftIcon
                    sx={{
                      color: "white",
                      height: "30px",
                      width: "30px",
                      borderRadius: "50%",
                      backgroundColor: "blue",
                      ml: "10px",
                    }}
                    onClick={handleDrawerClose}
                  />
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "19px",
                      alignItems: "center",
                      fontFamily: "Nunito sans",
                    }}
                  >
                    Property Manager For Start-up
                  </Typography>
                </Box>
              </IconButton>
            )}
          </DrawerHeader>

          <DrawerHeader sx={{ mr: "-17%" }}>
            {!open && (
              <IconButton onClick={handleDrawerOpen} mr="90px">
                <ChevronRightIcon
                  sx={{
                    color: "white",
                    height: "30px",
                    width: "100%",
                    borderRadius: "50% 50%",
                    backgroundColor: "blue",
                  }}
                />
              </IconButton>
            )}
          </DrawerHeader>
        </Box>
        <List
          sx={{
            backgroundColor: "#333333",
            color: "white",
            fontSize: "20px",
            justifyContent: "space-between",
          }}
        >
          {menuItems.map((item, index) => (
            <ListItem
              key={item.text}
              disablePadding
              sx={{ display: "block", color: "white", mb: "10px" }}
            >
              <ListItemButton
              Component={Link}
              to={item.path}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  
                }}

              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    display: "flex", 
                    alignItems:"center",
                    justifyContent: "center",
                    mr: open ? 4 : "auto",
                    color: "white",
                    ml: "10px",
                    height:"40px",
                    width:"40px",
                    borderRadius:"50%",
                    backgroundColor: location.pathname=== item.path ? "blue" : "",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  sx={{
                    opacity: open ? 1 : 0,
                    fontSize: "70px",
                    letterSpacing: "0.5",
                  }}>
                  {item.text}
                  </ListItemText>
               
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default SideNavbar;
