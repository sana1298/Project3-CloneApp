import { Box,  CardMedia,  Paper,  Typography } from '@mui/material'
import React from 'react'
import HomeTabs from './HomeTabs';
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
   <Box sx={{width:690,ml:20}}>
    <Typography variant='h5' sx={{backgroundColor:'lightblue'}}>Home</Typography>
    <HomeTabs/>
    {/* <Box>
    {posts.map((post, index) => (
      <Paper>
                <Typography key={index}>
                  {post} 
                </Typography>
                <CardMedia
            component="img"
            sx={{ width: 35, height: 35, ml: 11, mt: 2 }}
            image={selectedImage}
            alt="anime"
          />
                </Paper>
                ))}
    </Box> */}
    {/* <Box>
        {selectedImage && (
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected Image"
            style={{ maxWidth: '100px' }}
          />
        )}
      </Box> */}
    
   </Box>
   </>
  )
}

export default Home