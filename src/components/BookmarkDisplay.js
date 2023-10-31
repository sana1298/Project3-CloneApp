import * as React from "react";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import { useForm } from "../context/UserContext";
import UserContext from "../context/UserContext";
import Popper from "@mui/material/Popper";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import Avatar from "./Avatar";

const BookmarkDisplay = () => {
  const { newDetails, liked, setLiked, bookmark, setBookmark } =
    useForm(UserContext);

  const handleLikeClick = (item) => {
    if (!liked) {
      setLiked(!liked);
    }
    if (liked.includes(item)) {
      setLiked(liked.filter((likedItem) => likedItem !== item));
    } else {
      setLiked([...liked, item]);
    }
    console.log(liked, "777777777");
  };
  const handleBookmarkClick = (items) => {
    // setBookmark(!bookmark);
    if (bookmark.includes(items)) {
      setBookmark(
        bookmark.filter((bookmarkedItems) => bookmarkedItems !== items)
      );
    } else {
      setBookmark([...bookmark, items]);
    }
  };
//   const { setBookmark } = useForm(UserContext);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const handleClear = () => {
    setBookmark([]);
  };

  return (
    <>
      <Box sx={{ width: 670, ml: 20, position: "relative" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            position: "fixed",
            zIndex: 1,
            width: 690,
            bgcolor: "white",
          }}
        >
          <Box sx={{ ml: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Bookmarks
            </Typography>
            <Typography>@{newDetails.userName}</Typography>
          </Box>
          <Box>
      
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box
          sx={{
            border: 1,
            p: 1,
            bgcolor: "background.paper",
            borderRadius: 4,
            mt: 0.3,
          }}
        >
          <Typography
            variant="p"
            sx={{ fontWeight: "bold", cursor: "pointer", color: "red" }}
            onClick={handleClear}
          >
            Clear all Bookmarks
          </Typography>
        </Box>
      </Popper>
    </Box>
          <Box>
          <Box onClick={handleClick}>
        <IconButton sx={{ width: 45, height: 45, mt: 1 }}>
          <Tooltip title="More">
            <MoreHorizOutlinedIcon />
          </Tooltip>
        </IconButton>
      </Box>


          </Box>
        </Box>
        <Box sx={{ position: "absolute", mt: 8 }}>
          {bookmark.length > 0 ? (
            <>
              {bookmark.map((userPost) => {
                const Liked = liked.includes(userPost);
                const Bookmark = bookmark.includes(userPost);
                return (
                  <Card sx={{ mt: 5, borderRadius: 5, ml: 2 }}>
                    <Box sx={{ display: "flex" }}>
                      <Box sx={{ ml: -9, mt: -1 }}>
                        <Avatar />
                      </Box>
                      <Box sx={{ ml: 2 }}>
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                          {userPost.userName}
                        </Typography>
                        <Typography>{userPost.content}</Typography>

                        <Box>
                          <CardMedia
                            component="img"
                            sx={{
                              borderRadius: 5,
                              width: 500,
                              border: "1px solid black",
                            }}
                            src={userPost.image}
                            alt="TwitterLogo"
                          />
                        </Box>
                        <Box sx={{ mt: 2, display: "flex" }}>
                          <Tooltip
                            title={liked ? "Unlike" : "Like"}
                            onClick={() => handleLikeClick(userPost)}
                          >
                            {Liked ? (
                              <FavoriteOutlinedIcon sx={{ color: "red" }} />
                            ) : (
                              <FavoriteBorderOutlinedIcon />
                            )}
                          </Tooltip>
                          {Liked ? (
                            <span>{userPost.liked + 1}</span>
                          ) : (
                            <span>{userPost.liked}</span>
                          )}

                          <Tooltip
                            title={
                              bookmark ? "Remove from Bookmark" : "Bookmark"
                            }
                            onClick={() => handleBookmarkClick(userPost)}
                            sx={{ ml: 55 }}
                          >
                            {Bookmark ? (
                              <BookmarkOutlinedIcon />
                            ) : (
                              <BookmarkBorderOutlinedIcon />
                            )}
                          </Tooltip>
                        </Box>
                      </Box>
                    </Box>
                  </Card>
                );
              })}
            </>
          ) : (
            <>
            <Box sx={{width:380,height:100,ml:20,mt:5}}>
            <Typography variant="h4" sx={{fontWeight:'bold'}}>Save posts for later</Typography>
              <Typography>Bookmark posts to easily find them again in the future.</Typography>
            </Box>
              
            </>
          )}
        </Box>
      </Box>
    </>
  );
};
export default BookmarkDisplay;


