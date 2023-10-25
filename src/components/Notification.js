import { Box, Typography } from '@mui/material'
import React from 'react';
import NotificationTabs from '../Tabs/NotificationTabs'

const Notification = () => {
  return (
   <>
   <Box sx={{width:660,ml:20}}>
    <Typography variant='h5' sx={{fontWeight:'bold'}}>Notifications</Typography>
    <NotificationTabs/>
   </Box>
   </>
  )
}

export default Notification