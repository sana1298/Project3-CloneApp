import React from "react";
import { Card, Tooltip, Typography } from "@mui/material";
import Avatar from "./Avatar";
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import { useForm } from "../context/UserContext";
import UserContext from "../context/UserContext";

const BookmarkedPosts = () => {
  const { bookmarkedPosts } = useForm(UserContext);

  return (
    <div>
      {bookmarkedPosts.map((post, index) => (
        <Card key={index}>
          <div>
            <Avatar />
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Sanofer Bavasa
            </Typography>
          </div>
          <Typography>{post.content}</Typography>
          {/* Display a button to unbookmark the post */}
          <Tooltip title="Remove from Bookmark">
            <BookmarkOutlinedIcon
            //   onClick={() => handleUnbookmark(index)}
              sx={{ cursor: "pointer" }}
            />
          </Tooltip>
        </Card>
      ))}
    </div>
  );
};

export default BookmarkedPosts;
