import React from "react";
import { CardMedia, Paper } from "@mui/material";
import TwitterLogo from "../images/twitterlogo.png";
import MoreIcon from "../images/more.png";
// import PostIcon from "../images/post.png";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import Avatar from "./Avatar";
import Post from './Post';
import Accounts from './Accounts';
import Tooltip from '@mui/material/Tooltip';

import {
  Link,
  // useNavigate
} from "react-router-dom";

const Sidebar = () => {
  // const navigate=useNavigate()
  // const handleHomeClick=()=>{
  //   navigate("/home")
  // }
  return (
    <>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          width: 160,
          height: 600,
          justifyContent: "right",
          overflowY: "scroll",
          position: "fixed",
          // p:1
        }}
      >
        <Link to="/home">
          <CardMedia
            component="img"
            sx={{ width: 42, height: 42, ml: 11, mt: 2 }}
            image={TwitterLogo}
            alt="anime"
            // onClick={handleHomeClick}
          />
        </Link>
        <Link to="/home">
          <HomeIcon
            sx={{ width: 35, height: 35, ml: 11, mt: 2, color: "black" }}
            // onClick={handleHomeClick}
          />
        </Link>
        <Link to="/search">
          <SearchIcon sx={{ width: 35, height: 35, ml: 11, mt: 2,color: "black" }} />
        </Link>
        <Link to="/notification">
          <NotificationsNoneIcon
            sx={{ width: 35, height: 35, ml: 11, mt: 2,color: "black" }}
          />
        </Link>
        <Link to="/message">
          <MailOutlineIcon sx={{ width: 35, height: 35, ml: 11, mt: 2,color: "black" }} />
        </Link>

        <Link to="/lists">
          <ListAltIcon sx={{ width: 35, height: 35, ml: 11, mt: 2,color: "black" }} />
        </Link>

        <Link to="/communities">
          <PeopleOutlineIcon sx={{ width: 35, height: 35, ml: 11, mt: 2,color: "black" }} />
        </Link>

        <Link to="/premium">
          <CardMedia
            component="img"
            sx={{ width: 25, height: 25, ml: 11, mt: 2,color: "black" }}
            image={TwitterLogo}
            alt="anime"
          />
        </Link>
        <Link to="/profile">
          <PersonOutlineIcon sx={{ width: 35, height: 35, ml: 11, mt: 2,color: "black" }} />
        </Link>
        <Tooltip title="More">
        <Link to="/more">
          <CardMedia
            component="img"
            sx={{ width: 30, height: 30, ml: 11, mt: 2,color: "black" }}
            image={MoreIcon}
            alt="anime"
          />
        </Link>
        </Tooltip>
        {/* <Link to="/post">
          <CardMedia
            component="img"
            sx={{ width: 35, height: 35, ml: 11, mt: 2,color: "black" }}
            image={PostIcon}
            alt="anime"
          />
        </Link> */}
        <Post sx={{ width: 35, height: 35, ml: 11, mt: 2,color: "black" }} />
        
        {/* <Link to="/Accounts">
          <Avatar />
        </Link> */}
         <Tooltip title="Accounts">
         <Accounts/>
         </Tooltip>
          
      </Paper>
    </>
  );
};

export default Sidebar;
