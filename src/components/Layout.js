import React from "react";
import Sidebar from "./Sidebar";
import RightSide from "./RightSide";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

function Layout() {
  return (
    <Box>
      <Sidebar />
      <Box>
        <Outlet />
      </Box>
      <RightSide sx={{mt:-10}} />
    </Box>
  );
}

export default Layout;
