import { Box,  Typography } from '@mui/material'
import React from 'react'
import HomeTabs from '../Tabs/HomeTabs';
// import { useForm } from "../context/FormContext";
import { useForm } from "../context/UserContext";
import UserContext from '../context/UserContext'



const Home = () => {
  const {posts,
    // selectedImage
    } = useForm(UserContext);
  console.log('posts777',posts)

  return (
   <>
   <Box sx={{width:670,ml:20,}}>
    <Typography variant='h5' 
    // sx={{backgroundColor:'lightblue'}}
    >Home</Typography>
    <HomeTabs/>
   </Box>
   </>
  )
}

export default Home