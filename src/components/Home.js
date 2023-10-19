import { Box, Typography } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
   <>
   <Box>
    <Typography variant='' sx={{backgroundColor:'lightblue'}}>Home</Typography>
   </Box>
   <Outlet />
   </>
  )
}

export default Home