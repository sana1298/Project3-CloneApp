import { Box, Typography } from '@mui/material'
import React from 'react'
import SubscribeButton from './SubscribeButton';


const HighlightsDisplay = () => {
  return (
    <>
    <Box sx={{width:380,height:100,ml:20,mt:5}}>
            <Typography variant="h4" sx={{fontWeight:'bold'}}>Highlight on your profile</Typography>
              <Typography>You must be subscribed to Premium to highlight posts on your profile.</Typography>
              <SubscribeButton/>
            </Box>
    </>
  )
}

export default HighlightsDisplay