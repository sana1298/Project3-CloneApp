import { Box, Card, CardMedia, Tooltip, Typography } from "@mui/material";
import HomeTabs from "../Tabs/HomeTabs";
// import { useForm } from "../context/FormContext";
// import { useForm } from "../context/UserContext";
// import UserContext from "../context/UserContext";
// import Avatar from "./Avatar";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
// import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
// import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
// import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";



const Home = () => {

  // const {
  //   posts,
  //   // setPosts,
  //   // defalutPost,
  //   liked,
  //   setLiked,
  //   bookmark,
  //   setBookmark,
  //   deletePost,
  //   postDetails,
  //   // selectedImage
  // } = useForm(UserContext);
  // console.log("posts777", posts);
  // const handleLikeClick = (item) => {
    // setLiked(!liked);
  //   if (!liked) {
  //   setLiked(!liked);
  // };
//   if (liked.includes(item)) {
//     setLiked(liked.filter((likedItem)=>likedItem !==item))
// }else{
//   setLiked([...liked,item]);
// }
//   }
//   const handleBookmarkClick = () => {
//     setBookmark(!bookmark);
//   };

//   const handleDeletePost = (index) => {
//     deletePost(index);
//     console.log("Delete post",index)
//   };

  return (
    <>
      <Box sx={{ width: 670, ml: 20,
        // position:'relative' 
        }}>
        {/* <Box 
        // sx={{position:'fixed',zIndex:1}}
        >
        <Typography
          variant="h5"
          // sx={{backgroundColor:'lightblue'}}
        >
          Home
        </Typography>
        </Box> */}
        <Box>
        <HomeTabs />
        </Box>
       
         {/* <Box>
          <CreatePost/>
        </Box> */}
       
      </Box>
    </>
  );
};
export default Home;
