// import { Box, Typography } from '@mui/material'
// import React from 'react'

// const Post = () => {
//   return (
//    <>
//    <Box>
//     <Typography variant='' sx={{backgroundColor:'lightblue'}}>Post</Typography>
//    </Box>
//    </>
//   )
// }

// export default Post

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
import { Box, CardMedia, TextField } from "@mui/material";
import PostIcon from "../images/post.png";
import Avatar from "./Avatar";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <CardMedia
            component="img"
            sx={{ width: 35, height: 35, ml: 11, mt: 2,color: "black" }}
            image={PostIcon}
            alt="anime"
            onClick={handleClickOpen}
          />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle> */}
        <DialogActions>
          <Box sx={{display:'flex'}}>
          <Button onClick={handleClose}><CloseOutlinedIcon/></Button>
          <Button variant='Outlined' sx={{border:'none',color:'primary'}}>Drafts</Button>
          </Box>
          
        </DialogActions>
        <DialogContent>
          <Avatar/>
          <DialogContentText id="alert-dialog-description">
            <TextField placeholder='What is happening?!'></TextField>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}