import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import { Paper } from '@mui/material';
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

export default function SimplePopper() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <Box onClick={handleClick}>
      <IconButton sx={{ width: 45, height: 45, }}>
              <Tooltip title="More">
                <MoreHorizOutlinedIcon sx={{color:'black'}}/>
              </Tooltip>
            </IconButton>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Paper sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
          🙁 See less often
        </Paper>
      </Popper>
    </Box>
  );
}