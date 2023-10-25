import React from 'react'
import Layout from './Layout';
import { Navigate } from "react-router-dom";

const useAuth = () => {
    const value = localStorage.getItem("LoggedIn");
    return value;
  };
const Protect = () => {
    const isAuth = useAuth();
    return(isAuth ? <Layout/> : <Navigate to="/" />)
}

export default Protect