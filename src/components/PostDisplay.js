import React from "react";
import { useForm } from "../context/UserContext";
import UserContext from "../context/UserContext";
import { Box, Typography } from "@mui/material";

const PostDisplay = () => {
  const { email, defalutPost } = useForm(UserContext);

  // Filter the posts based on the user name (e.g., "Sanofer Bavasa")
  const userPosts = defalutPost.posts.filter((post) => post.email == email);
  console.log(email,'eeeeeeeeeeeeee')
//   console.log(post.email,'eeeeeeeeeeeeee')
  console.log(userPosts,'0101010101010101')

  return (
    <Box>
      <Typography>Posts by </Typography>
      <ul>
        {userPosts.map((post, index) => (
          <li key={index}>
            <p>{post.content}</p>
            <img src={post.image} alt="Post" />
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default PostDisplay;
