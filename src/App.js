import { Box } from '@mui/material';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import RightSide from './components/RightSide';
import Home from './components/Home';
import Search from './components/Search';
import Notification from './components/Notification';
import Message from './components/Message';
import Lists from './components/Lists';
import Communities from './components/Communities';
// import Premium from './components/Premium';
import Profile from './components/Profile';
// import More from './components/More';
// import Post from './components/Post';
// import Accounts from './components/Accounts';

function App() {
  return (
   <>
    <Box>
   <Router>
      <Routes>
        <Route path='/' element={<Sidebar/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/notification" element={<Notification/>}/>
        <Route path="/message" element={<Message/>}/>
        <Route path="/lists" element={<Lists/>}/>
        <Route path="/communities" element={<Communities/>}/>
        {/* <Route path="/premium" element={<Premium/>}/> */}
        <Route path="/profile" element={<Profile/>}/>
        {/* <Route path="/more" element={<More/>}/> */}
        {/* <Route path="/post" element={<Post/>}/> */}
        {/* <Route path="/accounts" element={<Accounts/>}/> */}
      </Routes>
   </Router>
  
   
   <RightSide />
   </Box>
    
   </>
  );
}

export default App;
