import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { Typography } from '@mui/material';


export default function SimplePopper() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <Box>
      <Box onClick={handleClick} >
            <IconButton sx={{ width: 45, height: 45,  mt: 1 }}>
              <Tooltip title="More">
                <MoreHorizOutlinedIcon/>
              </Tooltip>
            </IconButton>
          </Box>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper',borderRadius:4,}}>
          <Typography variant='p' sx={{fontWeight: 'bold'}}>🙁  Not interested in this</Typography><br/>
          <Typography variant='p' sx={{fontWeight: 'bold',mt:4}}>🙁  This trend is harmful or spammy</Typography>
        </Box>
      </Popper>
    </Box>
  );
}