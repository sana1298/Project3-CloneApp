import React from "react";
import Sidebar from "./Sidebar";
import RightSide from "./RightSide";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";;


function Layout() {
  return (
    <Box sx={{position:'relative'}}> 
      {/* <Link to="/home"> */}
      <Sidebar />
      <RightSide />
      <Box>
        <Outlet/>
      </Box>
      
      
      {/* </Link> */}
    </Box>
  );
}

export default Layout;
