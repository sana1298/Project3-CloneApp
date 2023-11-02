import { Avatar, Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import { useForm } from "../context/UserContext";
import UserContext from "../context/UserContext";

const FollowDisplay = () => {
  const { follow } = useForm(UserContext);
  return (
    <>
      <Box>
        {follow.map((followPost) => {
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
                //    onClick={() => handleFollow(userPost.id)}
              >
                Follow
              </Button>
              </Box>
              

              {/* <Box sx={{ mt: 2, display: "flex" }}>
                  <Tooltip
                    title={liked ? "Unlike" : "Like"}
                    onClick={() => handleLikeClick(userPost)}
                  >
                    {Liked ? (
                      <FavoriteOutlinedIcon
                        sx={{ color: "red", cursor: "pointer" }}
                      />
                    ) : (
                      // <FavoriteBorderOutlinedIcon />

                      <FavoriteBorderOutlinedIcon sx={{ cursor: "pointer" }} />
                      // <FavoriteOutlinedIcon sx={{ color: "red" }} />
                    )}
                  </Tooltip>
                  {Liked ? (
                    <span>{userPost.liked + 1}</span>
                  ) : (
                    <span>{userPost.liked}</span>
                  )}
                </Box> */}
            </Card>
          );
        })}
      </Box>
    </>
  );
};

export default FollowDisplay;
