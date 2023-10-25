import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { Box,  Paper,  Typography } from "@mui/material";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Link from '@mui/material/Link';



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
        <Button variant='contained' sx={{borderRadius:8,mt:1,backgroundColor:'black'}} onClick={handleClickOpen}>Subscribe</Button>
        
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{overflowX:"hidden"}}
      >
        <DialogActions>
          <Box >
          <Button sx={{mr:65,color:'black'}} onClick={handleClose}><CloseOutlinedIcon/></Button>
          </Box>
          
        </DialogActions>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography variant='h5' sx={{color:'black',textAlign:'center'}}>Who are you?</Typography>
            <Box sx={{mt:1}}>
            <Typography variant='p' sx={{ml:20}}>Choose the right subscription for you:</Typography>

            </Box>
            <Box sx={{display:'flex',mt:3,}}>
            <Paper sx={{width:300,height:100,p:2,cursor:'pointer'}}>
            <Typography variant='p' >Premium</Typography>
            <Typography variant='h5' sx={{color:'black'}}>I am an individual</Typography>
            <Typography variant='p'>For individuals and creators</Typography>
            </Paper>
            <Paper sx={{width:300,height:100,p:2,ml:2,cursor:'pointer'}}>
            <Typography variant='p' >Verified Organizations</Typography>
            <Typography variant='h5' sx={{color:'black'}}>I am an Organization</Typography>
            <Typography variant='p'>For businesses,government agencies,and non-profits</Typography>
            </Paper>
            </Box>
          </DialogContentText>
        </DialogContent>
        
        {/* <DialogActions> */}
        <Box>
          <Button sx={{mr:50,borderRadius:3,width:550,ml:3,backgroundColor:'black',mt:2}} variant="contained" onClick={handleClose} autoFocus>
           Subscribe
          </Button>
          </Box>
        {/* </DialogActions> */}
        <Box sx={{mt:3,ml:8}}>
        <Typography sx={{fontSize:20}} variant='p'>Learn more about  <Link href="https://help.twitter.com/en/using-x/x-premium">Premium</Link> and  <Link href="https://help.twitter.com/en/using-x/verified-organizations">Verified Organizations</Link> </Typography>
        </Box>
      </Dialog>
    </Box>
  );
}