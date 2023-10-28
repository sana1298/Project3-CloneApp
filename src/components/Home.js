import { Box, Card, CardMedia, Tooltip, Typography } from "@mui/material";
import React from "react";
import HomeTabs from "../Tabs/HomeTabs";
// import { useForm } from "../context/FormContext";
import { useForm } from "../context/UserContext";
import UserContext from "../context/UserContext";
import Avatar from "./Avatar";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

const Home = () => {
  const {
    posts,
    defalutPost,
    liked,
    setLiked
    // selectedImage
  } = useForm(UserContext);
  console.log("posts777", posts);
  const handleLikeClick = () => {
    setLiked(!liked); // Toggle the liked state
  };
  return (
    <>
      <Box sx={{ width: 670, ml: 20 }}>
        <Typography
          variant="h5"
          // sx={{backgroundColor:'lightblue'}}
        >
          Home
        </Typography>
        <HomeTabs />
        <Box>
          {defalutPost.posts.map((userPost) => (
            <Card
              sx={{ mt: 5, borderRadius: 5, ml: 2,  }}
            >
              <Box sx={{display:'flex'}}>
                <Box sx={{ml:-7,mt:-1 }}>
                  <Avatar />
                </Box>
                <Box sx={{ml:2}}>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {userPost.userName}
                    </Typography>
                    <Typography>{userPost.content}</Typography>
                  </Box>
                  <Box>
                    <CardMedia
                      component="img"
                      sx={{ borderRadius: 5, width: 500,border: "1px solid black" }}
                      src={userPost.image}
                      alt="TwitterLogo"
                    />
                  </Box>
                  <Box sx={{mt:2}}>
                  <Tooltip title={liked ? "Unlike" : "Like"} onClick={handleLikeClick}>
            {liked ? <FavoriteOutlinedIcon sx={{color:'red'}} /> : <FavoriteBorderOutlinedIcon />}
          </Tooltip>
          </Box>
                </Box>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Home;
