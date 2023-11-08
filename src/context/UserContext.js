import React, { createContext, useContext, useState } from "react";
import{sub} from 'date-fns'

const UserContext = createContext();

const trending=[
  {
    trend:'1. Trending ',
    tags:'#NationalUnityDay',
    likes:'27.9K posts',
  },
  {
    trend:'2. Trending ',
    tags:'#SardarVallabhbhaiPatel',
    likes:'33.8K posts',
  },
  {
    trend:'3. Trending ',
    tags:'#iphones',
    likes:'4,794K posts',
  },
  {
    trend:'4. Trending ',
    tags:'#View of Reality',
    likes:'41.4K posts',
  },
  {
    trend:'5. Trending ',
    tags:'#Iron Man Of India ',
    likes:'8,880 posts',
  },
  {
    trend:'6. Trending ',
    tags:'#Apple',
    likes:'284K posts',
  },
  {
    trend:'7. Trending ',
    tags:'#PAKvsBAN',
    likes:'21.5K posts',
  },
  {
    trend:'8. Trending ',
    tags:'#Opposition',
    likes:'76.1K posts',
  },
]

const news=[
  {
  trend:'Trending in Business & finance',
  tags:'Crypto',
  likes:'477K posts',
},
{
  trend:'Trending in Business & finance',
  tags:'Apple iPhones',
  likes:'450K posts',
},
{
  trend:'Trending in Business & finance',
  tags:'Bitcoin and Ethereum',
  likes:'3,419 posts',
},
{
  trend:'Trending in Business & finance',
  tags:'#Mamaearth',
  likes:'3,174 posts',
},
{
  trend:'Trending in Business & finance',
  tags:'Over US$3,300,000,000',
  likes:'449K posts',
},
{
  trend:'Trending in Business & finance',
  tags:'Launchpool',
  likes:'456K posts',
},
]

const sports=[
  {
  trend:'Trending in Sports',
  tags:'#NZvsSA',
  likes:'3,241 posts',
},
{
  trend:'Trending in Sports',
  tags:'New England',
  likes:'10.5K posts',
},
{
  trend:'Trending in Sports',
  tags:'#PorVida',
  likes:'3,441 posts',
},
{
  trend:'Trending in Sports',
  tags:'Paul George',
  likes:'13.5K posts',
},
{
  trend:'Trending in Sports',
  tags:'#SAvsNZ',
  likes:'1,955 posts',
},
{
  trend:'Trending in Sports',
  tags:'#INDvsSL',
  likes:'3,667 posts',
},
]

const entertainment=[
  {
  trend:'Entertainment-Trending',
  tags:'#Rolex',
  likes:'4.9K posts',
},
{
  trend:'Entertainment-Trending.Music',
  tags:'#BLACKPINK',
  likes:'33K posts',
},
{
  trend:'Entertainment-Trending',
  tags:'#LeoSuccessMeet',
  likes:'146K posts',
},
{
  trend:'Entertainment-Trending',
  tags:'#Jawan',
  likes:'17.9K posts',
},
{
  trend:'Entertainment-Trending',
  tags:'#Samantha',
  likes:'2,013 posts',
},
{
  trend:'Entertainment-Trending',
  tags:'#Tiger3Diwali2023',
  likes:'4,029 posts',
},
]

const defalutPost = [
  {
    person:'https://play-lh.googleusercontent.com/0SAFn-mRhhDjQNYU46ZwA7tz0xmRiQG4ZuZmuwU8lYmqj6zEpnqsee_6QDuhQ4ZofwXj=w240-h480-rw',
    userName: "sanofer bavasa",
    content: "Puppy love is the best kind of love.",
    date:sub(new Date(),{minutes:20}).toISOString(),
    image:
      "https://images.pexels.com/photos/5264088/pexels-photo-5264088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    id:1,
    liked:55  
    
  },
  {
    person:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNpTKcwSR1d8nsU3xEVHSwOYbq9VM9Fz65p8AeAuJEn31XiwoB5ApWSLFq8PTIjWJ0e3Y&usqp=CAU',
    userName: "zaara maryam",
    content: "This is heaven on earth.",
    date:sub(new Date(),{minutes:120}).toISOString(),
    image: "https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg",
    id:2,
    liked:103,
  },
  {
    person:'https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp',
    userName: "ava lane",
    content: "Life is short and the world is wide. Better get started.",
    date:sub(new Date(),{minutes:80}).toISOString(),
    image:
      "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id:3,
      liked:406,  
  },
  {
    person:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNpTKcwSR1d8nsU3xEVHSwOYbq9VM9Fz65p8AeAuJEn31XiwoB5ApWSLFq8PTIjWJ0e3Y&usqp=CAU',
    userName: "zaara maryam",
    content: "Meow is the time to celebrate.",
    date:sub(new Date(),{minutes:43}).toISOString(),
    image:
      "https://images.pexels.com/photos/8075318/pexels-photo-8075318.jpeg?auto=compress&cs=tinysrgb&w=400",
    id:4,
    liked:600,
  },
  {
    person:'https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp',
    userName: "ava lane",
    content: "At peace in nature...",
    date:sub(new Date(),{minutes:199}).toISOString(),
    image:
      "https://i.pinimg.com/originals/a4/96/c2/a496c2b6bc5d7cfe0e0674f6598c38ad.jpg",
     id:5, 
     liked:863,
  },
  {
    person:'https://play-lh.googleusercontent.com/0SAFn-mRhhDjQNYU46ZwA7tz0xmRiQG4ZuZmuwU8lYmqj6zEpnqsee_6QDuhQ4ZofwXj=w240-h480-rw',
    userName: "sanofer bavasa ",
    content: "Always say yes to new adventures.",
    date:sub(new Date(),{minutes:2493}).toISOString(),
    image:
      "https://images.pexels.com/photos/354103/pexels-photo-354103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     id:6, 
     liked:40,
  },
  {
    person:'https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp',
    userName: "Ava Lane",
    content: "My furry companion.",
    date:sub(new Date(),{minutes:550}).toISOString(),
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEScAVRQVaF9_bq6Ll--GuhE7Bn_mdTu-FUg&usqp=CAU",
    id:7,
    liked:20,  
  },
  {
    person:'https://play-lh.googleusercontent.com/0SAFn-mRhhDjQNYU46ZwA7tz0xmRiQG4ZuZmuwU8lYmqj6zEpnqsee_6QDuhQ4ZofwXj=w240-h480-rw',
    userName: "sanofer bavasa",
    content: "'Tis the season to be freezin'.",
    date:sub(new Date(),{minutes:1782}).toISOString(),
    image:
      "https://images.pexels.com/photos/3933881/pexels-photo-3933881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    id:8,
    liked:259,  

  },

  {
    person:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNpTKcwSR1d8nsU3xEVHSwOYbq9VM9Fz65p8AeAuJEn31XiwoB5ApWSLFq8PTIjWJ0e3Y&usqp=CAU',
    userName: "Zaara Maryam",
    content: "Life is not meant to be lived in one place.",
    date:sub(new Date(),{minutes:9999}).toISOString(),
    image:
      "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=400",
    id:9,
    liked:987,  
  },
];

const followProfile=[
  {
    profile:'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/320500/320506.png',
    userName:'Rashid Khan',
    bio:'Cricket Player',
  },
  {
    profile:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN3c5h-3eaZRziJ8hzWgDaxpP0F4adysOHFg&usqp=CAU',
    userName:'VijaySethupathi',
    bio:'Actor',
  },
  {
    profile:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4y3azK65t_Gi9i2XJvTQUkGABpJ4zSpwuIA&usqp=CAU',
    userName:'Sony Music South',
    bio:'Offical Twitter Page fpr Sony Music South(India)',
  },
  {
    profile:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqaomEYUTVSW8LuaOhqIOcHhGZgTBNbf47Zg&usqp=CAU',
    userName:'Surya',
    bio:'Actor',
  },
  {
    profile:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5BB8ZkQLEf37MuQfat8T0lItuzI44eGU0jQ&usqp=CAU',
    userName:'Vijay Television',
    bio:'Vijay Television is a leading Tamil language entertainment channel',
  },
  {
    profile:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgdlhde3n3sRRcl7I4ZZoHAC7jRWTx2YKleg&usqp=CAU',
    userName:'Lokesh Kanagaraj',
    bio:'Writer,Director',
  },
  {
    profile:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI1b8OonICXqfATt-3Pw6NSDV_URrhvDI6XA&usqp=CAU',
    userName:'Karthi',
    bio:'Actor',
  },
  {
    profile:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6qh392hqVJToykJqSQD1s8DBujGPITzon1g&usqp=CAU',
    userName:'Gauthamvasudevmenon',
    bio:'Engineering films',
  },
  {
    profile:'https://th-i.thgim.com/public/entertainment/movies/sahm8e/article66882333.ece/alternates/FREE_1200/5%20.jpg',
    userName:'Hiphop Tamizha',
    bio:'Official Twitter of Hiphop Tamizha, the pioneers of Indian Tamil Hiphop.',
  },
  {
    profile:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJowLDWfr--R6aaBdYRe-9qIlwFfSv_i5hvA&usqp=CAU',
    userName:'Sai Pallavi',
    bio:'Doctor, Actor',
  },
]

const UserProvider = ({ children }) => {
    // const [isFollowing,setIsFollowing]=useState(false)
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("LoggedIn") === "true"
  );

  const [userName, setUserName] = useState("");
  const [postContent, setPostContent] = useState("");
  const [posts, setPosts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [liked, setLiked] = useState([]);
  const [bookmark, setBookmark] = useState([]);
  const [pswd, setPswd] = useState("");
  const [email, setEmail] = useState("");
  const [newDetails, setNewDetails] = useState();
  const [postDetails, setPostDetails] = useState(defalutPost);
  const [profilePost,setProfilePost] = useState([]);
  const [following, setFollowing] = useState([]);
  const [follow, setFollow] = useState(followProfile);
  console.log(follow,"1111111111")
  // const myPost=postDetails.filter(mypost => mypost.userName === newDetails.userName)

  
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
        liked,
        setLiked,
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
        postDetails,
        setPostDetails,
        profilePost,
        setProfilePost,
        news,
        trending,
        sports,
        entertainment,
        following,
        setFollowing,
        follow,
        setFollow,
        // isFollowing,
        // setIsFollowing,
        // myPost,
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
