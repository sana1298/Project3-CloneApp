import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
//   const[toggle,setToggle]=useState(false);

const [postContent, setPostContent] = useState(''); 
const [posts, setPosts] = React.useState([]);
const [selectedImage, setSelectedImage] = React.useState(null);
const [liked, setLiked] = useState(false);
const deletePost = (index) => {
  setPosts((prevPosts) => prevPosts.filter((_, i) => i !== index));
};
const defalutPost={
  userId:0,
  posts:[{
    avatar:'',
    content: '',
    img:'',
    like:""

  },
  {
    avatar:'',
    content: '',
    img:'',
    like:""

  },
  {
    avatar:'',
    content: '',
    img:'',
    like:""

  },
  {
    avatar:'',
    content: '',
    img:'',
    like:""

  },
  {
    avatar:'',
    content: '',
    img:'',
    like:""

  },
],
 
}
  
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
      defalutPost,
    }}
     >{children}</UserContext.Provider>
  );
};

export const useForm = () => {
  return useContext(UserContext);
};

export default UserProvider;