import { Box, Paper } from '@mui/material'
import React from 'react';
import SearchBar from './SearchBar';
import Subscribe from './Subscribe';
import Happening from './Happening';

const RightSide = () => {
  return (
    <>
    <Paper
    sx={{
        width:350,
        height:590,
        // backgroundColor: 'lightgreen',
        ml:107
     }}
    >
        <Box sx={{p:2}}>
        <SearchBar sx={{width:100}} />
        <Subscribe />
        <Happening />
        </Box>
        
    </Paper>
    </>
  )
}

export default RightSide