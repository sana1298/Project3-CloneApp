import React, { createContext, useContext, useState } from 'react';
import Image1 from '../images/image1.jpg'
import Image2 from '../images/image2.avif'
import Image3 from '../images/image3.webp'
import Pet1 from '../images/pet1.jpg'
import Pet2 from '../images/pet2.webp'
import Pet3 from '../images/pet3.jpg'
import Travel1 from '../images/travel1.jpg'
import Travel2 from '../images/travel2.webp'
import Travel3 from '../images/travel3.jpg'

const UserContext = createContext();

const UserProvider = ({ children }) => {
//   const[toggle,setToggle]=useState(false);
const [loggedIn, setLoggedIn] = useState(
  localStorage.getItem("LoggedIn") === "true"
);

const [userName, setUserName] = useState("");
const [postContent, setPostContent] = useState(''); 
const [posts, setPosts] = useState([]);
const [selectedImage, setSelectedImage] = React.useState(null);
const [liked, setLiked] = useState(false);
const deletePost = (index) => {
  setPosts((prevPosts) => prevPosts.filter((_, i) => i !== index));
};
const defalutPost={
  posts:[{
    userName:'Sanofer Bavasa',
    content: '',
    img:{Image1},
    like:""

  },
  {
    userName:'Zaara Maryam',
    content: '',
    img:{Pet1},
    like:""

  },
  {
    userName:'Ava Lane ',
    content: '',
    img:{Travel1},
    like:""

  },
  {
    userName:'Sanofer Bavasa',
    content: '',
    img:{Image2},
    like:""

  },
  {
    userName:'Zaara Maryam',
    content: '',
    img:{Pet2},
    like:""

  },
{
  userName:'Ava Lane',
  content: '',
  img:{Travel2},
  like:""

},
{
  userName:'Sanofer Bavasa',
  content: '',
  img:{Image3},
  like:""

},
{
  userName:'Zaara Maryam',
  content: '',
  img:{Pet3},
  like:""

},
{
  userName:'Ava Lane',
  content: '',
  img:{Travel3},
  like:""

},
]
 
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
      loggedIn,
      setLoggedIn,
      userName,  
      setUserName, 
    }}
     >{children}</UserContext.Provider>
  );
};

export const useForm = () => {
  return useContext(UserContext);
};

export default UserProvider;