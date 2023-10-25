import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
import { Box, Typography } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
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
      <Box onClick={handleClickOpen} sx={{ml:2,mt:-1}}>
            <IconButton sx={{ width: 45, height: 45, }}>
              <Tooltip title="More">
                <GroupAddOutlinedIcon sx={{color:'black',}}/>
              </Tooltip>
            </IconButton>
          </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogActions>
          <Box >
          <Button sx={{mr:65,color:'black'}} onClick={handleClose}><CloseOutlinedIcon/></Button>
          </Box>
        </DialogActions>
        <DialogContent sx={{textAlign:"left",ml:4}}>
          <DialogContentText id="alert-dialog-description">
            <Typography variant='h5' sx={{fontWeight: 'bold',color:'black'}}>Subscribe today</Typography>
            <Typography variant='p' sx={{mt:2}}>Only verified users can create a Community.Sign up for<br/> premium to continue.</Typography><br/>
            <Button variant='contained' sx={{backgroundColor:'black',width:500,borderRadius:4,mt:2}}>Subscribe today</Button><br/>
            <Button variant='outlined' sx={{color:'black',border:'1px solid black',width:500,mt:2,borderRadius:4}}>No thanks</Button>
          </DialogContentText>
        </DialogContent>
        
      </Dialog>
    </Box>
  );
}