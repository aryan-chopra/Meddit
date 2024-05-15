import React from 'react';
import './index.css';
import './post_style.css'
import './style.css'
import './colors.css'
import Header from './Components/header/Header';
import Navigator from './Components/leftSide/Navigator';
import RightBar from './Components/rightSide/RightBar'
import { Outlet, useLocation } from 'react-router-dom';
import PostHome from './Components/middle/PostHome';
import { useEffect, useState } from 'react';
import UserContextProvider from './contexts/UserContextProvider';



export default function App(){
  const [router, setRouter] = useState('')
  
  return(
    <div className="main-page">
      <Header userImg='./resources/test_account_images/account_one.png'/>
        <UserContextProvider>
          <Navigator/>
          <Outlet/>
          <RightBar/>
        </UserContextProvider>
    </div>
  )
}

