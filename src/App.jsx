import React from 'react';
import './index.css';
import './post_style.css'
import './style.css'
import './colors.css'
import Header from './Components/header/Header';
import Navigator from './Components/leftSide/Navigator';
import RightBar from './Components/rightSide/RightBar'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import PostHome from './Components/middle/PostHome';
import { useEffect, useState } from 'react';
import UserContextProvider from './contexts/UserContextProvider';
import Loader from './Components/Loader/Loader';



export default function App(){
  const [router, setRouter] = useState('')

  const navigate = useNavigate();
  const [isLoader, setIsLoader] = useState(true);

  setTimeout(() => {
    setIsLoader(false);
    // navigate('/authentication/sign-in');
  }, 2500);

  useEffect(() => {

  },[])
  
  return isLoader ? <Loader/> : (
    <div className="main-page">
      <Header userImg='./resources/test_account_images/account_one.png'/>
        <UserContextProvider>
          <Navigator/>
          <Outlet/>
          <RightBar/>
        </UserContextProvider>
    </div>
  )}


