import React from "react";
import { CardMedia, Paper } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import TwitterLogo from "../images/twitterlogo.png";
// import MoreIcon from "../images/more.png";
// import PostIcon from "../images/post.png";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import Avatar from "./Avatar";
import Post from "./Post";
import Accounts from "./Accounts";
import Tooltip from "@mui/material/Tooltip";
import More from "./More";
import Premium from "./Premium";
import { Link } from "react-router-dom";

const Sidebar = () => {
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
            sx={{ width: 35, height: 35, ml: 11, mt: 2 }}
            image={TwitterLogo}
            alt="anime"
          />
        </Link>
        <IconButton sx={{ width: 39, height: 39, ml: 11, mt: 2 }}>
          <Link to="/home">
            <Tooltip title="Home">
              <HomeIcon
                sx={{ width: 35, height: 35, mt: 2, color: "black", mb: 1.5 }}
              />
            </Tooltip>
          </Link>
        </IconButton>
        <IconButton sx={{ width: 39, height: 39, ml: 11, mt: 2 }}>
          <Link to="/search">
            <Tooltip title="Search">
              <SearchIcon
                sx={{ width: 35, height: 35, mt: 2, color: "black",mb: 1.5 }}
              />
            </Tooltip>
          </Link>
        </IconButton>

        <IconButton sx={{ width: 39, height: 39, ml: 11, mt: 2 }}>
          <Link to="/notification">
            <Tooltip title="Notification">
              <NotificationsNoneIcon
                sx={{ width: 35, height: 35, mt: 2, color: "black",mb: 1.5 }}
              />
            </Tooltip>
          </Link>
        </IconButton>

        <IconButton sx={{ width: 39, height: 39, ml: 11, mt: 2 }}>
          <Link to="/message">
            <Tooltip title="Message">
              <MailOutlineIcon
                sx={{ width: 35, height: 35, mt: 2, color: "black",mb: 1.5 }}
              />
            </Tooltip>
          </Link>
        </IconButton>

        <IconButton sx={{ width: 39, height: 39, ml: 11, mt: 2 }}>
          <Link to="/lists">
            <Tooltip title="Lists">
              <ListAltIcon
                sx={{ width: 35, height: 35, mt: 2, color: "black",mb: 1.5 }}
              />
            </Tooltip>
          </Link>
        </IconButton>

        <IconButton sx={{ width: 39, height: 39, ml: 11, mt: 2 }}>
          <Link to="/communities">
            <Tooltip title="Communities">
              <PeopleOutlineIcon
                sx={{ width: 35, height: 35, mt: 2, color: "black",mb: 1.5 }}
              />
            </Tooltip>
          </Link>
        </IconButton>
        
        <Premium />
        <IconButton sx={{ width: 39, height: 39, ml: 11, mt: 1.5 }}>
          <Link to="/profile">
            <Tooltip title="Profile">
              <PersonOutlineIcon
                sx={{ width: 35, height: 35, mt: 1.5, color: "black",mb: 1.5 }}
              />
            </Tooltip>
          </Link>
        </IconButton>
        <More />
        <Post sx={{ width: 35, height: 35, ml: 11, mt: 2, color: "black" }} />
        <Accounts />
      </Paper>
    </>
  );
};

export default Sidebar;
