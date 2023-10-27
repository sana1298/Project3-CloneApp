import { Box, Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import HomeTabs from "../Tabs/HomeTabs";
// import { useForm } from "../context/FormContext";
import { useForm } from "../context/UserContext";
import UserContext from "../context/UserContext";
import Avatar from "./Avatar";

const Home = () => {
  const {
    posts,
    defalutPost,
    // selectedImage
  } = useForm(UserContext);
  console.log("posts777", posts);

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
              sx={{ mt: 5, borderRadius: 5, ml: 2, border: "1px solid black" }}
            >
              <Box sx={{display:'flex'}}>
                <Box sx={{ bgcolor: "red",ml:-9 }}>
                  <Avatar />
                </Box>
                <Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {userPost.userName}
                    </Typography>
                    <Typography>{userPost.content}</Typography>
                  </Box>
                  <Box>
                    <CardMedia
                      component="img"
                      sx={{ borderRadius: 5, width: 500 }}
                      src={userPost.image}
                      alt="TwitterLogo"
                    />
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
