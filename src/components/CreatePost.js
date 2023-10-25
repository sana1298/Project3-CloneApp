import React from "react";
import { Box, CardMedia, Paper, Tooltip, Typography } from "@mui/material";
import { useForm } from "../context/UserContext";
import UserContext from "../context/UserContext";
import Avatar from "./Avatar";
// import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
// import Tooltip from "@mui/material/Tooltip";

const CreatePost = () => {
  const { posts, selectedImage, deletePost,liked,setLiked } = useForm(UserContext);
  const handleDeletePost = (index) => {
    deletePost(index);
    console.log("Delete post",index)
  };

  const handleLikeClick = () => {
    setLiked(!liked); // Toggle the liked state
  };

  return (
    <Box>
      {posts.map((post, index) => (
        <Paper sx={{mt:1}}>
          <Box sx={{ display: "flex" }}>
            <Avatar />
            {/* <MoreHorizOutlinedIcon sx={{ ml: 60, mt: 3 }} /> */}
          <Typography key={index}>{post}</Typography>
             
            <Tooltip title="Delete">
              <CloseOutlinedIcon sx={{ ml: 58, mt: 3 }}  onClick={() => handleDeletePost(index)} />
            </Tooltip>
          </Box>

          {/* <Typography key={index}>{post}</Typography> */}
          <CardMedia
            component="img"
            sx={{ width: 35, height: 35, ml: 11, mt: 2 }}
            image={selectedImage}
            alt="post"
          />
          <Tooltip title={liked ? "Unlike" : "Like"} onClick={handleLikeClick}>
            {liked ? <FavoriteOutlinedIcon sx={{color:'red'}} /> : <FavoriteBorderOutlinedIcon />}
          </Tooltip>
        </Paper>
      ))}
    </Box>
  );
};

export default CreatePost;
