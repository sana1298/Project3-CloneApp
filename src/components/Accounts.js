import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Avatar from "./Avatar";
import {  Paper, Typography } from '@mui/material';
import { useForm } from "../context/UserContext";
import UserContext from "../context/UserContext";
// import { Navigate } from "react-router-dom";


export default function SimplePopper() {
  const {  setLoggedIn,
    newDetails,
    // defalutPost 
  } =useForm(UserContext);
  // console.log(defalutPost,newDetails,"postss")
  const [anchorEl, setAnchorEl] = React.useState(null);
// console.log(logindetails,"login accounyt")

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  const handleLogout = () => {
    localStorage.setItem("LoggedIn", false);
    setLoggedIn(false);
  };
  // console.log(logindetails,'00000000000000000')
  // if (!loggedIn) {
  //   return <Navigate to="/" />;
  // }

  return (
    <Box>
      <Box aria-describedby={id} type="button" onClick={handleClick}>
       <Avatar/>
      </Box>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Paper sx={{ p: 2, bgcolor: 'background.paper',mb:2,ml:5,borderRadius:4,height:70,width:250,border:'none' }}>
         
          <Typography sx={{fontWeight:'bold','&:hover': {
          backgroundColor: '#f2f2f2',
          height:20,
          p:1
        },}}>Add an existing account</Typography>
          <Typography sx={{mt:2,fontWeight:'bold','&:hover': {
          backgroundColor: '#f2f2f2',
          height:20,
          p:1
        },}}><Box
        sx={{ marginleft: 5 }}
        variant="contained"
        onClick={handleLogout}
      >
       Log out @{newDetails.userName}
       </Box>
      </Typography>
         
        </Paper>
      </Popper>
    </Box>
  );
}