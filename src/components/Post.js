import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from '@mui/material/DialogTitle';
import { Box, CardMedia, TextField } from "@mui/material";
import PostIcon from "../images/post.png";
import Avatar from "./Avatar";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Tooltip from "@mui/material/Tooltip";
import Link from "@mui/material/Link";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import IconButton from "@mui/material/IconButton";
import { useForm } from "../context/UserContext";
import UserContext from "../context/UserContext";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const { postContent, setPostContent,newDetails,selectedImage,setPostDetails, postDetails,profilePost,setProfilePost } = useForm(UserContext);

  const handleTextFieldChange = (event) => {
    setPostContent(event.target.value);
  };

  const handlePost = () => {
    const newPostContent ={
      name:newDetails.userName,
      content:postContent,
      image:selectedImage,
    }
    setPostDetails([newPostContent,...postDetails])
    setProfilePost([...profilePost,newPostContent])
    
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Tooltip title="Post">
        <CardMedia
          component="img"
          sx={{ width: 50, height: 50, ml: 10, mt: 1, color: "black" }}
          image={PostIcon}
          alt="anime"
          onClick={handleClickOpen}
        />
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle> */}
        <DialogActions>
          <Box sx={{ display: "flex" }}>
            <Button onClick={handleClose}>
              <CloseOutlinedIcon />
            </Button>
            <Button
              variant="Outlined"
              sx={{ border: "none", color: "primary" }}
            >
              <Link href="#">Drafts</Link>
            </Button>
          </Box>
        </DialogActions>
        <DialogContent>
          <Box sx={{ display: "flex",justifyContent:'space-between' }}>
            <Avatar />
            <DialogContentText id="alert-dialog-description">
              <TextField
                placeholder="What is happening?!"
                onChange={handleTextFieldChange}
              ></TextField>
            </DialogContentText>
          </Box>
        </DialogContent>
        <Box>
          <hr />
        </Box>

        <DialogActions>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", mr: 8 }}>
              <IconButton
                sx={{
                  "&:hover": {
                    backgroundColor: "#e6faff",
                    height: 40,
                  },
                }}
              >
                {" "}
                <Tooltip title="Media">
                  <Link href="#">
                    <CollectionsOutlinedIcon sx={{ mt: 1 }} />
                  </Link>
                </Tooltip>
              </IconButton>
              <IconButton
                sx={{
                  "&:hover": {
                    backgroundColor: "#e6faff",
                    height: 40,
                  },
                }}
              >
                <Tooltip title="GIF">
                  <Link href="#">
                    <GifBoxOutlinedIcon sx={{ mt: 1 }} />
                  </Link>
                </Tooltip>
              </IconButton>
              <IconButton
                sx={{
                  "&:hover": {
                    backgroundColor: "#e6faff",
                    height: 40,
                  },
                }}
              >
                <Tooltip title="Poll">
                  <Link href="#">
                    <BallotOutlinedIcon sx={{ mt: 1 }} />
                  </Link>
                </Tooltip>
              </IconButton>
              <IconButton
                sx={{
                  "&:hover": {
                    backgroundColor: "#e6faff",
                    height: 40,
                  },
                }}
              >
                <Tooltip title="Emoji">
                  {" "}
                  <Link href="#">
                    <SentimentSatisfiedOutlinedIcon sx={{ mt: 1 }} />
                  </Link>
                </Tooltip>
              </IconButton>
              <IconButton
                sx={{
                  "&:hover": {
                    backgroundColor: "#e6faff",
                    height: 40,
                  },
                }}
              >
                <Tooltip title="Schedule">
                  <Link href="#">
                    <DateRangeOutlinedIcon sx={{ mt: 1 }} />
                  </Link>
                </Tooltip>
              </IconButton>
              <IconButton
                sx={{
                  "&:hover": {
                    backgroundColor: "#e6faff",
                    height: 40,
                  },
                }}
              >
                <Tooltip title="Location">
                  <Link href="#">
                    <RoomOutlinedIcon sx={{ mt: 1 }} />
                  </Link>
                </Tooltip>
              </IconButton>
            </Box>
            <Box  onClick={handlePost}>
            <Button
              variant="contained"
              onClick={handleClose}
              autoFocus
              sx={{ borderRadius: 9 }}
            >
              Post
            </Button>
            </Box>
            
          </Box>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
