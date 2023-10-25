import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import SearchBar from "./SearchBar";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import MoreIcon from "../images/more.png";
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";

const Lists = () => {
  return (
    <>
      <Box sx={{ width: 660, ml: 20, p: 2 }}>
        <Box sx={{ display: "flex" }}>
          <ArrowBackOutlinedIcon sx={{ mt: 1 }} />
          <Box sx={{ width: 550, ml: 1 }}>
            <SearchBar />
          </Box>

          <PlaylistAddOutlinedIcon
            sx={{ border: "2px solid black", ml: 2, mt: 1 }}
          />
          <CardMedia
            component="img"
            sx={{ width: 30, height: 30, color: "black", mb: 1, ml: 2, mt: 1 }}
            image={MoreIcon}
            alt="anime"
          />
        </Box>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Pinned Lists
        </Typography>
        <Typography variant="p">
          Nothing to see here yet — pin your favorite Lists to access them
          quickly.
        </Typography>
        <hr />
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Discover new Lists
        </Typography>
        <hr />
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Your Lists
        </Typography>
        <Typography variant="p">
          You haven't created or followed any Lists. When you do, they'll show
          up here.
        </Typography>
      </Box>
    </>
  );
};

export default Lists;
