import {
  Box,
  Card,
  CardMedia,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import { useForm } from "../context/UserContext";
import UserContext from "../context/UserContext";
// import AvatarImg from "./AvatarImg";
// import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
// import Tooltip from "@mui/material/Tooltip";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import Avatar from "@mui/material/Avatar";
// import Stack from "@mui/material/Stack";
import TimeAgo from './TimeAgo'

const CreatePost = () => {
  const {
    posts,
    newDetails,
    liked,
    setLiked,
    bookmark,
    setBookmark,
    postDetails,
    setPostDetails,
    setProfilePost,
    profilePost,

    // selectedImage
  } = useForm(UserContext);
  console.log("posts777", posts);
  const handleLikeClick = (item) => {
    // setLiked(!liked);
    //   if (!liked) {
    //   setLiked(!liked);
    // };
    if (liked.includes(item)) {
      setLiked(liked.filter((likedItem) => likedItem !== item));
    } else {
      setLiked([...liked, item]);
    }
  };
  console.log("9999999999", liked);

  const handleDeletePost = (value) => {
    const deletePost=postDetails.filter((post) => post.id !== value)
    setPostDetails(deletePost);
    const deletePost1=profilePost.filter((post) => post.id !== value)
    setProfilePost(deletePost1);
    console.log("Delete post", value);
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
  console.log("bookmark", bookmark);

  return (
    <Box
    //  sx={{ position: "absolute" }}
    >
      {/* {defalutPost.posts.map((userPost, index) => ( */}
      {postDetails.map((userPost) => {
        const Liked = liked.includes(userPost);
        const Bookmark = bookmark.includes(userPost);
        return (
          <Card sx={{ mt: 3, borderRadius: 5, ml:.5,width:650 }}>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ ml: 2, mt: 1 }}>
                <Avatar
                  src={userPost.person}
                  alt={newDetails.userName}
                  sx={{ height: 60, width: 60 }}
                />
              </Box>
              <Box sx={{ ml: 2 }}>
                <Box sx={{display:'flex'}}>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {userPost.userName}
                  </Typography>
                  <TimeAgo timestamp={userPost.date}/>
                  <Tooltip title="Delete">
                    <CloseOutlinedIcon
                      sx={{ mt: 2, ml: 40, cursor: "pointer" }}
                      onClick={() => handleDeletePost(userPost.id)}
                    />
                  </Tooltip>
                </Box>
                <Typography>{userPost.content}</Typography>
                {/* <TimeAgo timestamp={userPost.date}/> */}

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
                      <FavoriteOutlinedIcon
                        sx={{ color: "red", cursor: "pointer" }}
                      />
                    ) : (
                      // <FavoriteBorderOutlinedIcon />

                      <FavoriteBorderOutlinedIcon sx={{ cursor: "pointer" }} />
                      // <FavoriteOutlinedIcon sx={{ color: "red" }} />
                    )}
                  </Tooltip>
                  {Liked ? (
                    <span>{userPost.liked + 1}</span>
                  ) : (
                    <span>{userPost.liked}</span>
                  )}

                  <Tooltip
                    title={bookmark ? "Remove from Bookmark" : "Bookmark"}
                    onClick={() => handleBookmarkClick(userPost)}
                    sx={{ ml: 55 }}
                  >
                    {Bookmark ? (
                      <BookmarkOutlinedIcon />
                    ) : (
                      // <BookmarkBorderOutlinedIcon />
                      <BookmarkBorderOutlinedIcon />
                      // <BookmarkOutlinedIcon />
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

export default CreatePost;
