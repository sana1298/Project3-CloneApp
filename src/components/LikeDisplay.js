import { useForm } from "../context/UserContext";
import UserContext from "../context/UserContext";
import { Box, Card, CardMedia, Tooltip, Typography } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
// import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Avatar from "./Avatar";
import TimeAgo from './TimeAgo'


const LikeDisplay = () => {
  const { liked, setLiked, bookmark, setBookmark,} =
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
    if (bookmark.includes(items)) {
      setBookmark(
        bookmark.filter((bookmarkedItems) => bookmarkedItems !== items)
      );
    } else {
      setBookmark([...bookmark, items]);
    }
  };


  return (
    <Box>
      {/* {defalutPost.posts.map((userPost, index) => ( */}
      {liked.map((userPost, index) => {
        const Liked = liked.includes(userPost);
        const Bookmark = bookmark.includes(userPost);

        return (
          <Card sx={{ mt: 5, borderRadius: 5, ml:.5,width:650 }}>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ ml: -9, mt: -1 }}>
                <Avatar />
              </Box>
              <Box sx={{ ml: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {userPost.userName}
                  </Typography>
                  <TimeAgo timestamp={userPost.date}/>

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
                    title={Liked ? "Unlike" : "Like"}
                    onClick={() => handleLikeClick(userPost)}
                  >
                    {Liked ? (
                      <FavoriteOutlinedIcon sx={{ color: "red" }} />
                    ) : (
                      // <FavoriteBorderOutlinedIcon />

                      <FavoriteBorderOutlinedIcon />
                      // <FavoriteOutlinedIcon sx={{ color: "red" }} />
                    )}
                  </Tooltip>
                  {Liked ? (
                    <span>{userPost.liked + 1}</span>
                  ) : (
                    <span>{userPost.liked}</span>
                  )}

                  <Tooltip
                     title={Bookmark ? "Remove from Bookmark" : "Add to Bookmark"}
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
    </Box>
  );
};

export default LikeDisplay;
