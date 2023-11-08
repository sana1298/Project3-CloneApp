import { Avatar, Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import { useForm } from "../context/UserContext";
import UserContext from "../context/UserContext";

const FollowingDisplay = () => {
  const { 
        // follow ,
        following,
        setFollowing,
        } = useForm(UserContext);

        const handleFollow = (followValue) => {
          if (following.includes(followValue)) {
            setFollowing(following.filter((user) => user !== followValue));
          } else {
            setFollowing([...following, followValue]);
          }
        };
  return (
    <>
      <Box>
        {following.map((followPost) => {
          const Follow=following.includes(followPost);
          return (
            <Card sx={{ mt: 1, borderRadius: 5, width: 650,p:1 }}>
                <Box sx={{ display: "flex",justifyContent:'space-between' }}>
              <Box sx={{ display: "flex" }}>
                <Box
                // sx={{ ml: 2, mt: 1 }}
                >
                  <Avatar
                    src={followPost.profile}
                    alt={followPost.userName}
                    sx={{ height: 60, width: 60 }}
                  />
                </Box>
             
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold",ml:1 }}>
                  {followPost.userName}
                </Typography>
                <Typography sx={{ml:1}}>{followPost.bio}</Typography>
              </Box>
              </Box>
              <Button
                variant="contained"
                sx={{
                  height: 40,
                  borderRadius: 6,
                    mt: 1,
                  //   ml: 10,
                  cursor: "pointer",
                  backgroundColor: "black",
                }}
                   onClick={() => handleFollow(followPost)}
              >
                {Follow?'Unfollow':'Follow'}
              </Button>
              </Box>
              
            </Card>
          );
        })}
      </Box>
    </>
  );
};

export default FollowingDisplay;
