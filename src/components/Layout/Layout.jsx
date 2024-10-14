import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNavbar from '../Navbar/SideNavbar'
function Layout() {
  return (
    <>
    <div>
        <SideNavbar />  {/*this will be on every page*/}
        <Outlet />    {/* Nested routes {home, sell,..} will render here*/}
    </div>
    </>
  )
}

export default Layout
