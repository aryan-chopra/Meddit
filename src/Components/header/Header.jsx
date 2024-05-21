import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header({userImg}){
    return(
      <>
        <Logo/>
        <SearchBox/>
        <Actions accountImg={userImg}/>
      </>
    )
  }
  
  function Logo(){
    return(
      <img className='logo' src='./resources/Logo.png'/>
    )
  }
  
  function SearchBox(){
    return (
      <div className="search-box">
              <img className="search-icon" alt="" src="./resources/search_icon.svg"/>
              <input className="search-text" type="search" placeholder="Type here to search..."/>
      </div>
    );
  }
  
  function Actions({accountImg}){
    return(
      <div className='actions-container'>
        <Link to='/create-post'>
        <ButtonPost text={"Create Post"}/>
        </Link>
        <Link to='/authentication/sign-in'>  
        <ButtonPost text={"Log Out"}/>
        </Link>
        <Link to='/userProfile'>
          <button><svg class="h-8 w-8 text-green-200 rounded-full"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />  <circle cx="12" cy="7" r="4" /></svg></button>
        </Link>
      </div>
    )
  }

  function ButtonPost({text}){
    return(
      <div className="button-div">
        <p className="button-text">{text}</p>
      </div>
    )
  }

  export default Header;