import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "../components/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Link from "@mui/material/Link";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import IconButton from "@mui/material/IconButton";
import { Button, CardMedia, TextField } from "@mui/material";
import { useForm } from "../context/UserContext";
import UserContext from "../context/UserContext";
import { styled } from "@mui/material/styles";
import CreatePost from "../components/CreatePost";

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
  const {
    postContent,
    setPostContent,
    newDetails,
    selectedImage,
    setSelectedImage,
    setPostDetails,
    postDetails,
    profilePost,
    setProfilePost,
  } = useForm(UserContext);

  const handleTextFieldChange = (event) => {
    setPostContent(event.target.value);
  };

  const handlePost = () => {
    const newPostContent = {
      // person: newDetails.userName,
      userName: newDetails.userName,
      content: postContent,
      date: new Date().toISOString(),
      image: selectedImage,
      id: postDetails.length + 1,
      liked: 0,
    };
    setPostDetails([newPostContent, ...postDetails]);
    setProfilePost([newPostContent, ...profilePost]);
    setSelectedImage(null);
    // setPostContent(null);
    

    // console.log(postDetails);
  };
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    // console.log(file, "file selected");
  };
  console.log(selectedImage, "selected image");
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
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Home
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          //     sx={{position:'fixed',
          //   zIndex: 1,
          //   mt:4
          // }}
        >
          <Tab label=" For You" {...a11yProps(0)} sx={{ ml: 20 }} />
          <Tab label="Following" {...a11yProps(1)} sx={{ ml: 20 }} />
          {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box
        // sx={{position:'fixed',zIndex:1,mt:10}}
        >
          <Box sx={{ display: "flex" }}>
            <Box sx={{ ml: -10, mt: -1 }}>
              <Avatar />
            </Box>

            <TextField
              placeholder="What is happening?!"
              sx={{ border: "none", ml: 2, width: 500 }}
              value={postContent}
              onChange={handleTextFieldChange}
            ></TextField>
          </Box>
          {selectedImage?(
            <>
            <Box sx={{
                      ml: 4
                    }}>
          <CardMedia
            component="img"
            sx={{ mt: 2 }}
            image={selectedImage}
            // alt="TwitterLogo"
          />
          </Box>
            </>
          ): null}
          
          <Box sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", mr: 8 }}>
              {/* <Button> */}
                <IconButton
                  sx={{
                    "&:hover": {
                      backgroundColor: "#e6faff",
                      height: 40,
                      width:40
                    },
                  }}
                >
                  <Tooltip title="Media">
                    <Button
                      component="label"
                      startIcon={<CollectionsOutlinedIcon sx={{ml:1}}/>}
                      sx={{width:10}}
                    >
                      <VisuallyHiddenInput
                        type="file"
                        onChange={handleImageSelect}
                        accept="image/*"
                      />
                    </Button>
                  </Tooltip>
                </IconButton>
              {/* </Button> */}
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
            <Box sx={{ mt: 2 }}>
              <Button
                variant="contained"
                sx={{ borderRadius: 5, ml: 27 }}
                onClick={handlePost}
              >
                Post
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
        // sx={{position:'absolute'}}
        >
          <CreatePost />
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {/* <Box sx={{ position: "sticky", zIndex: 1, }}> */}
          <Box sx={{ display: "flex" }}>
          <Box sx={{ ml: -10, mt: -1 }}>
              <Avatar />
            </Box>
            <TextField
              placeholder="What is happening?!"
              sx={{ border: "none", ml: 2, width: 500 }}
              value={postContent}
              onChange={handleTextFieldChange}
            ></TextField>
          </Box>
          {selectedImage?(
            <>
            <Box sx={{
                      ml: 4
                    }}>
          <CardMedia
            component="img"
            sx={{ mt: 2 }}
            image={selectedImage}
            // alt="TwitterLogo"
          />
          </Box>
            </>
          ): null}
          <Box sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", mr: 8 }}>
            <IconButton
                  sx={{
                    "&:hover": {
                      backgroundColor: "#e6faff",
                      height: 40,
                      width:40,
                    },
                  }}
                >
                  <Tooltip title="Media">
                    <Button
                      component="label"
                      startIcon={<CollectionsOutlinedIcon sx={{ml:1}}/>}
                    >
                      <VisuallyHiddenInput
                        type="file"
                        onChange={handleImageSelect}
                        accept="image/*"
                      />
                    </Button>
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
            <Box sx={{ mt: 2 }}>
              <Button
                variant="contained"
                sx={{ borderRadius: 5, ml: 30 }}
                onClick={handlePost}
              >
                Post
              </Button>
            </Box>
          </Box>
        {/* </Box> */}
      </CustomTabPanel>
    </Box>
  );
}
