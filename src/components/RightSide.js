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
        height: 600,
        // height:590,
        // backgroundColor: 'lightgreen',
        overflowY: "scroll",
        overflowX: "hidden",
        ml:107,
        position:'fixed'
     }}
    >
        <Box sx={{p:2}}>
          <Box sx={{width:360,ml:-3}}><SearchBar /></Box>
       
        <Subscribe />
        <Happening />
        </Box>
        
    </Paper>
    </>
  )
}

export default RightSide