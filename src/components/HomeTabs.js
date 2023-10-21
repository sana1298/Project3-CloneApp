import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "./Avatar";
import Tooltip from "@mui/material/Tooltip";
import Link from "@mui/material/Link";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import IconButton from "@mui/material/IconButton";
import { Button, TextField } from "@mui/material";
import { useForm } from "../context/UserContext";
import UserContext from "../context/UserContext";
import { styled } from "@mui/material/styles";
import CreatePost from "./CreatePost";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const { postContent, setPostContent, posts, setPosts } =
    useForm(UserContext);
  
  const handleTextFieldChange = (event) => {
    setPostContent(event.target.value);
  };

  const handlePost = () => {
    setPosts([...posts, postContent]);
    setPostContent("");
    console.log("Posted content: " + postContent);
    console.log("Post content: " + posts);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const handleImageSelect = (event) => {
  //   const file = event.target.files[0];
  //   setSelectedImage(file);
  // };
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label=" For You" {...a11yProps(0)} />
          <Tab label="Following" {...a11yProps(1)} />
          {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box>
          <Box sx={{ display: "flex" }}>
            <Avatar />
            <TextField
              placeholder="What is happening?!"
              sx={{ border: "none" }}
              value={postContent} // Bind the value to the state
              onChange={handleTextFieldChange}
            ></TextField>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", mr: 8 }}>
              <Button>
                <IconButton
                  sx={{
                    "&:hover": {
                      backgroundColor: "#e6faff",
                      height: 40,
                    },
                  }}
                >
                  <Tooltip title="Media">
                    <Link href="#">
                      <CollectionsOutlinedIcon sx={{ mt: 1 }}>
                        <VisuallyHiddenInput type="file" />
                      </CollectionsOutlinedIcon>
                    </Link>
                  </Tooltip>
                </IconButton>
              </Button>
              <IconButton
                sx={{
                  "&:hover": {
                    backgroundColor: "#e6faff",
                    height: 40,
                  },
                }}
              >
                <Tooltip title="GIF">
                  <Link href="#">
                    <GifBoxOutlinedIcon sx={{ mt: 1 }} />
                  </Link>
                </Tooltip>
              </IconButton>
              <IconButton
                sx={{
                  "&:hover": {
                    backgroundColor: "#e6faff",
                    height: 40,
                  },
                }}
              >
                <Tooltip title="Poll">
                  <Link href="#">
                    <BallotOutlinedIcon sx={{ mt: 1 }} />
                  </Link>
                </Tooltip>
              </IconButton>
              <IconButton
                sx={{
                  "&:hover": {
                    backgroundColor: "#e6faff",
                    height: 40,
                  },
                }}
              >
                <Tooltip title="Emoji">
                  {" "}
                  <Link href="#">
                    <SentimentSatisfiedOutlinedIcon sx={{ mt: 1 }} />
                  </Link>
                </Tooltip>
              </IconButton>
              <IconButton
                sx={{
                  "&:hover": {
                    backgroundColor: "#e6faff",
                    height: 40,
                  },
                }}
              >
                <Tooltip title="Schedule">
                  <Link href="#">
                    <DateRangeOutlinedIcon sx={{ mt: 1 }} />
                  </Link>
                </Tooltip>
              </IconButton>
              <IconButton
                sx={{
                  "&:hover": {
                    backgroundColor: "#e6faff",
                    height: 40,
                  },
                }}
              >
                <Tooltip title="Location">
                  <Link href="#">
                    <RoomOutlinedIcon sx={{ mt: 1 }} />
                  </Link>
                </Tooltip>
              </IconButton>
            </Box>
            <Box sx={{ mt: 1 }}>
              <Button
                variant="contained"
                sx={{ borderRadius: 5, ml: 35 }}
                onClick={handlePost}
              >
                Post
              </Button>
            </Box>
          </Box>
        </Box>
        <Box>
          <CreatePost/>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1} sx={{ ml: 2 }}>
        
      <Box>
          <Box sx={{ display: "flex" }}>
            <Avatar />
            <TextField
              placeholder="What is happening?!"
              sx={{ border: "none" }}
              value={postContent} // Bind the value to the state
              onChange={handleTextFieldChange}
            ></TextField>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", mr: 8 }}>
              <Button>
                <IconButton
                  sx={{
                    "&:hover": {
                      backgroundColor: "#e6faff",
                      height: 40,
                    },
                  }}
                >
                  <Tooltip title="Media">
                    <Link href="#">
                      <CollectionsOutlinedIcon sx={{ mt: 1 }}>
                        <VisuallyHiddenInput type="file" />
                      </CollectionsOutlinedIcon>
                    </Link>
                  </Tooltip>
                </IconButton>
              </Button>
              <IconButton
                sx={{
                  "&:hover": {
                    backgroundColor: "#e6faff",
                    height: 40,
                  },
                }}
              >
                <Tooltip title="GIF">
                  <Link href="#">
                    <GifBoxOutlinedIcon sx={{ mt: 1 }} />
                  </Link>
                </Tooltip>
              </IconButton>
              <IconButton
                sx={{
                  "&:hover": {
                    backgroundColor: "#e6faff",
                    height: 40,
                  },
                }}
              >
                <Tooltip title="Poll">
                  <Link href="#">
                    <BallotOutlinedIcon sx={{ mt: 1 }} />
                  </Link>
                </Tooltip>
              </IconButton>
              <IconButton
                sx={{
                  "&:hover": {
                    backgroundColor: "#e6faff",
                    height: 40,
                  },
                }}
              >
                <Tooltip title="Emoji">
                  {" "}
                  <Link href="#">
                    <SentimentSatisfiedOutlinedIcon sx={{ mt: 1 }} />
                  </Link>
                </Tooltip>
              </IconButton>
              <IconButton
                sx={{
                  "&:hover": {
                    backgroundColor: "#e6faff",
                    height: 40,
                  },
                }}
              >
                <Tooltip title="Schedule">
                  <Link href="#">
                    <DateRangeOutlinedIcon sx={{ mt: 1 }} />
                  </Link>
                </Tooltip>
              </IconButton>
              <IconButton
                sx={{
                  "&:hover": {
                    backgroundColor: "#e6faff",
                    height: 40,
                  },
                }}
              >
                <Tooltip title="Location">
                  <Link href="#">
                    <RoomOutlinedIcon sx={{ mt: 1 }} />
                  </Link>
                </Tooltip>
              </IconButton>
            </Box>
            <Box sx={{ mt: 1 }}>
              <Button
                variant="contained"
                sx={{ borderRadius: 5, ml: 35 }}
                onClick={handlePost}
              >
                Post
              </Button>
            </Box>
          </Box>
        </Box>
      </CustomTabPanel>
    </Box>
  );
}
