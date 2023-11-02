import { useForm } from "../context/UserContext";
import UserContext from "../context/UserContext";
import { Box, Card, CardMedia, Tooltip, Typography } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Avatar from "./Avatar";
import TimeAgo from './TimeAgo'



const MediaDisplay = () => {

  const { profilePost,
    postDetails,
    liked,
    setLiked,
    bookmark,
    setBookmark,
    setProfilePost,
    setPostDetails,
    newDetails,
    // myPost
   } = useForm(UserContext);

   const myPost=postDetails.filter(mypost => mypost.userName === newDetails.userName)

   const handleLikeClick = (item) => {
   
    if (!liked) {
    setLiked(!liked);
  };
  if (liked.includes(item)) {
    setLiked(liked.filter((likedItem)=>likedItem !== item))
}else{
  setLiked([...liked,item]);
}
  };
  const handleBookmarkClick = (items) => {
    // setBookmark(!bookmark);
    if (bookmark.includes(items)) {
        setBookmark(bookmark.filter((bookmarkedItems)=>bookmarkedItems !==items))
    }else{
      setBookmark([...bookmark,items]);
    }
  };

  const handleDeletePost = (value) => {
    const deletePost=postDetails.filter((post) => post.id !== value)
    setPostDetails(deletePost);
    const deletePost1=profilePost.filter((post) => post.id !== value)
    setProfilePost(deletePost1);
  };

  return (
    <Box>
    {/* {defalutPost.posts.map((userPost, index) => ( */}
    {myPost?(
        <>
         {myPost.map((userPost) =>{
      const Liked=liked.includes(userPost)
      const Bookmark = bookmark.includes(userPost);
      return (
      <Card sx={{ mt: 5, borderRadius: 5, ml:.5,width:650 }}>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ ml: -7, mt: -1 }}>
            <Avatar />
          </Box>
          <Box sx={{ ml: 2 }}>
            <Box sx={{display:'flex'}}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {userPost.userName}
              </Typography>
              <TimeAgo timestamp={userPost.date}/>
              <Tooltip title="Delete">
        <CloseOutlinedIcon sx={{ mt: 2,ml:40,cursor:'pointer' }}  onClick={() => handleDeletePost(userPost.id)} />
      </Tooltip>
              
            </Box>
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
                title={Bookmark ? "Remove from Bookmark" : "Add to Bookmark"}
                onClick={handleBookmarkClick}
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
    )})}
    </>
    ):(
        <>
        <Box sx={{width:380,height:100,ml:20,mt:5}}>
            <Typography variant="h4" sx={{fontWeight:'bold'}}>Lights,camera...attachments!</Typography>
              <Typography>When you post photos or videos, they will show up here.</Typography>
            </Box>
        </>
    )}
   
  </Box>
  );
};

export default MediaDisplay;
