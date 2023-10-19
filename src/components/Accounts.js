import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Avatar from "./Avatar";
import { Paper, Typography } from '@mui/material';


export default function SimplePopper() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <Box>
      <Box aria-describedby={id} type="button" onClick={handleClick}>
       <Avatar/>
      </Box>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Paper sx={{ p: 2, bgcolor: 'background.paper',mb:2,ml:5,borderRadius:4,height:70,width:250,border:'none' }}>
         
          <Typography>Add an existing account</Typography>
          <Typography sx={{mt:2}}>Log out @Sanofer</Typography>
         
        </Paper>
      </Popper>
    </Box>
  );
}