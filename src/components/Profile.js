import { Box, Typography } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ProfileTabs from "../Tabs/ProfileTabs";
import { useForm } from "../context/UserContext";
import UserContext from "../context/UserContext";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";


const Profile = () => {
  const {
    newDetails, 
    profilePost
  } =useForm(UserContext);
  return (
    <>
      <Box sx={{ width: 660, ml: 20,position:'relative', }}>
        <Box
          sx={{ position: "fixed", bgcolor: "white", zIndex: 1, height: 55,width: 660,display:'flex' }}
        >
          <ArrowBackOutlinedIcon sx={{ml:2,mt:1}}/>
          <Typography variant="" sx={{ backgroundColor: "lightblue",fontWeight:'bold',ml:3,mt:1 }}>
            {newDetails.userName}
          </Typography><br/>
          <Typography>{profilePost.length} posts</Typography>
        </Box>

        <Box>
          <Box
            sx={{
              bgcolor: "grey",
              width: 660,
              height: 230,
              // position: "relative",
            }}
          ></Box>
          <Box
            sx={{
              position: "absolute",
              mt: -8,
              ml: 2,
              border: "4px solid white",
              borderRadius: 15,
            }}
          >
            <BackgroundLetterAvatars sx={{ width: 240, height: 240 }} />
          </Box>
        </Box>
        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 8,ml:2 }}>
          {/* Sanofer Bavasa */}
          {newDetails.userName}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <CalendarMonthOutlinedIcon sx={{ml:2}}/>
          <Typography
            variant="p"
            sx={{ color: "#737373", fontSize: 18, ml: 1 }}
          >
            Joined November 2022
          </Typography>
        </Box>
        <Box>
          <ProfileTabs />
        </Box>
      </Box>
    </>
  );
};

export default Profile;

function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      width: 110,
      height: 110,
      // position: 'absolute',
    },
    children: `${name.split(" ")[0][0].toUpperCase()}${name
      .split(" ")[1][0]
      .toUpperCase()}`,
  };
}

// function BackgroundLetterAvatars() {
//   return (
//     <Stack direction="row" spacing={2}>
//       <Avatar {...stringAvatar("Kent Dodds")}
//        style={{ fontSize: 50 }} />
//     </Stack>
//   );
// }

  function BackgroundLetterAvatars() {
  const { newDetails,} =useForm(UserContext);

  return (
    <Stack direction="row" spacing={2} >
       <Avatar {...stringAvatar( 
        // "Sanofer Bavasa"
          `${newDetails.userName}`
          )} 
          style={{ fontSize: 50 }} 
          />
      
    </Stack>
  );
}