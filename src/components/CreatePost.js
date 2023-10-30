import { Box, Card, CardMedia, Paper, Tooltip, Typography } from "@mui/material";
import { useForm } from "../context/UserContext";
import UserContext from "../context/UserContext";
import Avatar from "./Avatar";
// import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
// import Tooltip from "@mui/material/Tooltip";
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';


const CreatePost = () => {

  // const {
  //   liked,
  //   setLiked,
  //   bookmark,
  //   setBookmark,
  //   deletePost,
  //   postDetails,
  //   // selectedImage
  // } = useForm(UserContext);
   const {
    posts,
    // setPosts,
    // defalutPost,
    liked,
    setLiked,
    bookmark,
    setBookmark,
    deletePost,
    postDetails,
    // selectedImage
  } = useForm(UserContext);
  console.log("posts777", posts);
  const handleLikeClick = (item) => {
    // setLiked(!liked);
    if (!liked) {
    setLiked(!liked);
  };
  if (liked.includes(item)) {
    setLiked(liked.filter((likedItem)=>likedItem !==item))
}else{
  setLiked([...liked,item]);
}
  }
  


  const handleDeletePost = (index) => {
    deletePost(index);
    console.log("Delete post",index)
  };


  const handleBookmarkClick = () => {
    setBookmark(!bookmark); 
  };

  return (
    <Box>
    {/* {defalutPost.posts.map((userPost, index) => ( */}
    {postDetails.map((userPost, index) =>{
      const Liked=liked.includes(userPost)
      return (
      <Card sx={{ mt: 5, borderRadius: 5, ml: 2 }}>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ ml: -7, mt: -1 }}>
            <Avatar />
          </Box>
          <Box sx={{ ml: 2 }}>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {userPost.userName}
              </Typography>
              <Typography>{userPost.content}</Typography>
            </Box>
            <Tooltip title="Delete">
        <CloseOutlinedIcon sx={{ mt: 2,ml:40,cursor:'pointer' }}  onClick={() => handleDeletePost(index)} />
      </Tooltip>
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
                onClick={()=>handleLikeClick(userPost)}
              >
                {Liked ? (
                  <FavoriteOutlinedIcon sx={{ color: "red" }} />
                  // <FavoriteBorderOutlinedIcon />

                ) : (
                  <FavoriteBorderOutlinedIcon />
                  // <FavoriteOutlinedIcon sx={{ color: "red" }} />
                )}
              </Tooltip>
                  {
                    Liked?(<span>{userPost.liked+1}</span>):<span>{userPost.liked}</span>
                  }

              <Tooltip
                title={bookmark ? "Remove from Bookmark" : "Bookmark"}
                onClick={handleBookmarkClick}
                sx={{ ml: 55 }}
              >
                {bookmark ? (
                  <BookmarkOutlinedIcon />
                ) : (
                  <BookmarkBorderOutlinedIcon />
                )}
              </Tooltip>
            
            </Box>
          </Box>
        </Box>
      </Card>
    )})}
  </Box>
  );
};

export default CreatePost;
