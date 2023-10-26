import React from "react";
import Sidebar from "./Sidebar";
import RightSide from "./RightSide";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { Navigate } from "react-router-dom";
import { useForm } from "../context/UserContext";
import UserContext from "../context/UserContext";



function Layout() {
  const { loggedIn} =useForm(UserContext);

  if (!loggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <>
    {loggedIn?(<Box sx={{position:'relative'}}>
      <Sidebar />
      <RightSide />
      <Box>
        <Outlet/>
      </Box>
     
    </Box>):('')}
    
    </>
  );
}

export default Layout;
