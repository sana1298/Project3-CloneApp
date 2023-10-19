import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const Subscribe = () => {
  return (
    <>
    <Box
    sx={{
        // border: '1px solid gray',
        borderRadius:4,
        width:290,
        // ml:2,
        mt:4,
        p:2,
        backgroundColor:'#f2f2f2'
    }} 
    >
        <Typography variant='h5'>Subscribe to Premium</Typography>
        <Typography variant='p'>Subscribe to unlock new features and if eligible,receive a share of ads revenue.</Typography>
        <Button variant='contained' sx={{borderRadius:8,mt:1,backgroundColor:'black'}}>Subscribe</Button>
    </Box>
    </>
  )
}

export default Subscribe