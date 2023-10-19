import { Box, Typography } from '@mui/material'
import React from 'react'

const Happening = () => {
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
        <Typography variant='h5'>What's happening</Typography>
    </Box>
    </>
  )
}

export default Happening