import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import MoreIcon from "../images/more.png";
import { Paper, Typography, CardMedia } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import Accordion from './Accordion';
import MonitorOutlinedIcon from '@mui/icons-material/MonitorOutlined';
import { Link } from "react-router-dom";


export default function SimplePopper() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const navigate = useNavigate();


  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
// const handleBookmark=()=>{
//   navigate("/bookmark");
  
// }

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <Box>
      <Box aria-describedby={id} type="button" onClick={handleClick}>
        <IconButton sx={{ width: 45, height: 45, ml: 10.5, mt: 1 }}>
          <Tooltip title="More">
            <CardMedia
              component="img"
              sx={{ width: 30, height: 30, mt: 1, color: "black", mb: 1 }}
              image={MoreIcon}
              alt="anime"
            />
          </Tooltip>
        </IconButton>
      </Box>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Paper
          sx={{
            p: 2,
            bgcolor: "background.paper",
            ml: 5,
            borderRadius: 4,
            height: 280,
            width: 300,
            border: "none",
          }}
        >
          <Link to="bookmark">

          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color:'black',
              textDecoration:'none',
              "&:hover": {
                backgroundColor: "#f2f2f2",
                height: 40,
                p: 1,
                
              },
            }}
            // onClick={handleBookmark}
          >
            <BookmarkBorderOutlinedIcon/>
            Bookmarks
          </Typography>
          </Link>
          <Typography
            variant="h5"
            sx={{
              mt: 2,
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#f2f2f2",
                height: 40,
                p: 1,
              },
            }}
          >
            <AlternateEmailOutlinedIcon/>
            Connect
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mt: 2,
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#f2f2f2",
                height: 40,
                p: 1,
              },
            }}
          >
            <MonitorOutlinedIcon/>
            Monetization
          </Typography>
          <hr />
          <Accordion/>
        </Paper>
      </Popper>
    </Box>
  );
}
