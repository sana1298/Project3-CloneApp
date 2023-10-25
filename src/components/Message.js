import { Box, Typography,Button } from '@mui/material'
import React from 'react';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';


const Message = () => {
  return (
   <>
   <Box sx={{width:660,ml:20}}>
    <Box sx={{display:'flex',justifyContent:'space-between'}}>
    <Typography variant='h5' sx={{fontWeight:'bold'}}>Messages</Typography>
    <Box sx={{mt:1}}>
      <SettingsOutlinedIcon/>
    <MarkEmailReadOutlinedIcon sx={{ml:2}}/>
    </Box>
    
   </Box>
   <Box sx={{mt:4,ml:4,width:370}}>
    <Typography variant='h4' sx={{fontWeight:'bold'}}>Welcome to your inbox!</Typography>
    <Typography variant='p'>Drop a line,share posts and more with private <br/>conversations between you and others on X.</Typography><br/>
    <Button variant='contained' sx={{mt:5,borderRadius:4}}>Write a message</Button>
   </Box>
   </Box>
   </>
  )
}

export default Message