import { Box } from "@mui/material";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import Notification from "./components/Notification";
import Message from "./components/Message";
import Lists from "./components/Lists";
import Communities from "./components/Communities";
import Profile from "./components/Profile";
// import Layout from "./components/Layout";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Protect from "./components/Protect";
import BookmarkDisplay from "./components/BookmarkDisplay";

function App() {
  return (
    <>
      <Box>
        <Router>
          <Routes>
            <Route path="/" element={<LoginForm  />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/layout" element={<Protect />}>
              {/* </Route> */}

              <Route index element={<Home />} />
              <Route path="search" element={<Search />} />
              <Route path="notification" element={<Notification />} />
              <Route path="message" element={<Message />} />
              <Route path="lists" element={<Lists />} />
              <Route path="communities" element={<Communities />} />
              <Route path="profile" element={<Profile />} />
              <Route path="bookmark" element={<BookmarkDisplay />} />
            </Route>
          </Routes>
        </Router>
      </Box>
    </>
  );
}

export default App;
