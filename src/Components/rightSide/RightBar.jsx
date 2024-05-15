import React, { useContext } from "react";
import AnnouncementBlock from "../AnnouncementBlock";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getAuth } from 'firebase/auth';
import PostDisplay from "../postDisplay/PostDisplay";


function RightBar(){
  const [router, setRouter] = useState('')
  const location = useLocation();
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    if(location){
      setRouter(location.pathname);
    }
    const auth = getAuth();
    if (auth.currentUser) {
      // User is signed in
      setUserEmail(auth.currentUser.email);
    } else {
      // No user is signed in
      setUserEmail(null);
    }
  },[location])
  console.log(router);
    return(
      <div className='right-bar'>
        {router == '/Community-Profile'? <AnnouncementBlock/> : <div><AccountStats username = {userEmail}/>
        <Notifications/></div>}
      </div>
    )
  }
  
  function AccountStats({username}){
    return(
      <div className='account-container'>
        <AccountImageName imgSrc={'./resources/test_account_images/account_one.png'} name={username || 'Userrrrr' }/>
        <AccountStatsContainer followers={'5K'} following={'2K'} posts={'100'}/>
      </div>
    )
  }
  
  function AccountImageName({imgSrc, name}){
    return(
      <div className='account-image-name-container community-container'>
        <img className='account-image' src={imgSrc}/>
        <div className='name-username-container'>
          <p className='account-name'>{name}</p>
        </div>
      </div>
    )
  }
  
  function AccountStatsContainer({followers, following, posts}){
    return(
      <div className='account-stats-container'>
        <Stat statName='Followers' statValue={followers}/>
        <Stat statName='Following' statValue={following}/>
        <Stat statName='Posts' statValue={posts}/>
      </div>
    )
  }
  
  function Stat({statName, statValue}){
    return(
      <div className='stat'>
        <p className='stat-value'>{statValue}</p>
        <p className='stat-name light-text'>{statName}</p>
      </div>
    )
  }
  function Notifications(){
    return(
      <div className='notification-menu'>
        <NotificationSection imgSrcs={['./resources/test_account_images/account_two.png', './resources/test_account_images/account_three.png', './resources/test_account_images/account_one.png', './resources/test_account_images/account_two.png', './resources/test_account_images/account_three.png', './resources/test_account_images/account_one.png', './resources/test_account_images/account_two.png', './resources/test_account_images/account_two.png', './resources/test_account_images/account_two.png', './resources/test_account_images/account_two.png']}/>
      </div>
    )
  }
  
  function NotificationSection({imgSrcs}){
    return(
      <div className='scrollable-div notificaton-section-container'>
        {imgSrcs.map((ele, i)=>
          <Notification imgSrc={ele} text={'1 new message'} isOpened={true}/>
      )}
  
        {/* <Notification imgSrc={'./resources/test_account_images/account_one.png'} text={'1 new message'} isOpened={true}/> */}
      </div>
    )
  }
  
  function Notification({imgSrc, text, isOpened}){
    let notificationClasses 
    if (isOpened){
      notificationClasses = 'notification-read notification-content';
    }
    else{
      notificationClasses = 'notification-unread notification-content'
    }
    return(
      <div className='hover-item community-container notification-title'>
        <img className='notification-icon' src={imgSrc}/>
        <p className={notificationClasses}>{text}</p>
      </div>
    )
  }
  export default RightBar;