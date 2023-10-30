import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

const defalutPost = [
  {
    // posts:[{
    userName: "Sanofer Bavasa",
    content: "",
    image:
      "https://images.pexels.com/photos/5264088/pexels-photo-5264088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    id:1,
    liked:55  
    
  },
  {
    userName: "Zaara Maryam",
    content: "",
    image: "https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg",
    id:2,
    liked:103,
  },
  {
    userName: "Ava Lane",
    content: "",
    image:
      "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id:3,
      liked:406,  
  },
  {
    userName: "Zaara Maryam",
    content: "",
    image:
      "https://images.pexels.com/photos/8075318/pexels-photo-8075318.jpeg?auto=compress&cs=tinysrgb&w=400",
    id:4,
    liked:600,
  },
  {
    userName: "Ava Lane",
    content: "",
    image:
      "https://i.pinimg.com/originals/a4/96/c2/a496c2b6bc5d7cfe0e0674f6598c38ad.jpg",
     id:5, 
     liked:863,
  },
  {
    userName: "Sanofer Bavasa ",
    content: "Always say yes to new adventures.",
    image:
      "https://images.pexels.com/photos/354103/pexels-photo-354103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     id:6, 
     liked:40,
  },
  {
    userName: "Ava Lane",
    content: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEScAVRQVaF9_bq6Ll--GuhE7Bn_mdTu-FUg&usqp=CAU",
    id:7,
    liked:20,  
  },
  {
    userName: "Sanofer Bavasa",
    content: "",
    image:
      "https://images.pexels.com/photos/3933881/pexels-photo-3933881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    id:8,
    liked:259,  

  },

  {
    userName: "Zaara Maryam",
    content: "Life is not meant to be lived in one place.",
    image:
      "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=400",
    id:9,
    liked:987,  
  },
];

const UserProvider = ({ children }) => {
  //   const[toggle,setToggle]=useState(false);
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("LoggedIn") === "true"
  );

  const [userName, setUserName] = useState("");
  const [postContent, setPostContent] = useState("");
  const [posts, setPosts] = useState([]);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [liked, setLiked] = useState([]);
  const [bookmark, setBookmark] = useState(false);
  const [pswd, setPswd] = useState("");
  const [email, setEmail] = useState("");
  const [newDetails, setNewDetails] = useState();
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
  const [postDetails, setPostDetails] = useState(defalutPost);
  const [profilePost,setProfilePost] = useState([]);
  

  const deletePost = (index) => {
    setPosts((prevPosts) => prevPosts.filter((_, i) => i !== index));
  };

  const data = JSON.parse(localStorage.getItem("data")) || [];
  // console.log(loginName,'55555555555')
  const logindetails = data.find((user) => {
    return user.email === email && user.password === pswd;
  });

  return (
    <UserContext.Provider
      value={{
        postContent,
        setPostContent,
        posts,
        setPosts,
        selectedImage,
        setSelectedImage,
        deletePost,
        liked,
        setLiked,
        // defalutPost,
        loggedIn,
        setLoggedIn,
        userName,
        setUserName,
        pswd,
        setPswd,
        email,
        setEmail,
        logindetails,
        newDetails,
        setNewDetails,
        bookmark,
        setBookmark,
        bookmarkedPosts,
        setBookmarkedPosts,
        postDetails,
        setPostDetails,
        profilePost,
        setProfilePost,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useForm = () => {
  return useContext(UserContext);
};

export default UserProvider;
