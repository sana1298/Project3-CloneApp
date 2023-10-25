import { Box, Typography } from '@mui/material'
import React from 'react';
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CommunityPopper from './CommunityPopper'
import MoreCommunities from './MoreCommunities'
const Communities = () => {
  return (
   <>
   <Box sx={{ width: 660, ml: 20, p: 2 }}>
   <Box sx={{ display: "flex",justifyContent:"space-between" }}>
          <ArrowBackOutlinedIcon />
          <Box sx={{ width: 550, ml: 1 }}>
           <Typography variant='h5' sx={{fontWeight: 'bold',ml:2}}>Communities</Typography>
          </Box>

          <SearchOutlinedIcon
          sx={{mt:.5}}
          />
        <CommunityPopper  />
        </Box>
        <Box sx={{display:'flex',justifyContent:'space-between',mt:4}}>
        <Typography variant='h5'sx={{fontWeight:'bold'}}>Discover new Communities</Typography>
         <MoreCommunities  />
        </Box>
        
   </Box>
   </>
  )
}

export default Communities