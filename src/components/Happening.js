import { Box, Typography } from "@mui/material";
import React from "react";
// import Tooltip from "@mui/material/Tooltip";
// import IconButton from "@mui/material/IconButton";
// import MoreIcon from "../images/more.png";
import MoreHappend from './MoreHappend'

const Happening = () => {
  return (
    <>
      <Box
        sx={{
          // border: '1px solid gray',
          borderRadius: 4,
          width: 290,
          // ml:2,
          
          mt: 4,
          p: 2,
          backgroundColor: "#f2f2f2",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          What's happening
        </Typography>
        <Box sx={{display:'flex',mt:3,justifyContent:'space-between'}}>
          
          <Box>
            <Typography variant="p" >
              Trending in India
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
             #LeoScam
            </Typography>
            <Typography variant="p" >
             26.8k Posts
            </Typography>
          </Box>
          <Box>
            <MoreHappend />
          </Box>
        </Box>
        <Box sx={{display:'flex',mt:3,justifyContent:'space-between'}}>
          
          <Box>
            <Typography variant="p" >
              Trending in India
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
             #RT4GM
            </Typography>
            <Typography variant="p" >
             1,138 Posts
            </Typography>
          </Box>
          <Box>
            <MoreHappend />
          </Box>
        </Box>
        <Box sx={{display:'flex',mt:3,justifyContent:'space-between'}}>
          
          <Box>
            <Typography variant="p" >
              Trending in India
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
             #Gazabombing
            </Typography>
            <Typography variant="p" >
             201K Posts
            </Typography>
          </Box>
          <Box>
            <MoreHappend />
          </Box>
        </Box>
        <Box sx={{display:'flex',mt:3,justifyContent:'space-between'}}>
          
          <Box>
            <Typography variant="p" >
              Trending in India
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
             #INDvsNZ
            </Typography>
            <Typography variant="p" >
             7,237 Posts
            </Typography>
          </Box>
          <Box>
            <MoreHappend />
          </Box>
        </Box>
        <Box sx={{display:'flex',mt:3,justifyContent:'space-between'}}>
          
          <Box>
            <Typography variant="p" >
              Trending in India
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
             #Goa4BestHeartCare
            </Typography>
            <Typography variant="p" >
             1,138 Posts
            </Typography>
          </Box>
          <Box>
            <MoreHappend />
          </Box>
        </Box>
       
      </Box>
    </>
  );
};

export default Happening;
