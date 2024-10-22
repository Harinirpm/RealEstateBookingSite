import React from "react";
import { Outlet } from "react-router-dom";
import SideNavbar from "../Navbar/SideNavbar";
import TopNavbar from "../Navbar/TopNavbar";
import useWindowDimensions from "../useWindowDiamention/UseWindowDiamention";
function Layout() {
  const { height, width } = useWindowDimensions();
  return (
    <>
      <div
        style={{ 
          // maxWidth: "100vw",
          //  maxHeight: "100vh",
            overflow: "hidden",
            width: width * 0.98,
          height: height * 0.98,
           }}
      >
        <div>
          <TopNavbar />
          <div>
            <SideNavbar />
            <div
              style={{
                flex: 1,
                margin: 0,
                padding: 0,
                marginTop: "-10px",
                marginLeft: "80px",
              }}
            >
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
