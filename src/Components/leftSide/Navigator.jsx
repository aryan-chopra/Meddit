import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

function Navigator() {
  return (
    <div className="navigator">
      <NavContainer />
      <NavCommunitiesContainer />
    </div>
  );
}

function NavContainer() {
  return (
    <div className="nav-item-container nav-tabs-container">
      <NavLink to="/" 
    style={({isActive})=> {
      return {
        backgroundColor: isActive ? "var(--primary-100)" : "",
        borderRadius: isActive ? "10px": "",
        
      };
      
    }}
    >
     <DisplayPostsNavItem text={"Home"} imgsrc={"./resources/home.svg"} />
      
    </NavLink>
      <DisplayPostsNavItem
        text={"Trending"}
        imgsrc={"./resources/trending.svg"}
      />
      <DisplayPostsNavItem text={"For You"} imgsrc={"./resources/forYou.svg"} />
    </div>
  );
}

function NavCommunitiesContainer() {
  const { setCommunity, setCommunityMiddle } = useContext(UserContext);
  const communityData = [
    {
      commImg: "./resources/community_icon.svg",
      commName: "Diabetes Management Hub",
      commStats : "27k"
    },
    {
      commImg: "./resources/community_icon.svg",
      commName: "Mental Health Support",
      commStats : "17k"
    },
    {
      commImg: "./resources/community_icon.svg",
      commName: "Heart Health Forum",
      commStats : "20k"
    },
    {
      commImg: "./resources/community_icon.svg",
      commName: "Chronic Pain Warriors",
      commStats : "37k"
    },
    {
      commImg: "./resources/community_icon.svg",
      commName: "Cancer Fighters CircleName",
      commStats : "23k"
    },
    {
      commImg: "./resources/community_icon.svg",
      commName: "Women's Wellness Corner",
      commStats : "12k"
    },
    {
      commImg: "./resources/community_icon.svg",
      commName: "Parenting and Pediatrics Zone",
      commStats : "245k"
    },
    {
      commImg: "./resources/community_icon.svg",
      commName: "Nutrition and Wellness Hub",
      commStats : "27k"
    },
    {
      commImg: "./resources/community_icon.svg",
      commName: "Fitness and Exercise Club",
      commStats : "27k"
    },
    {
      commImg: "./resources/community_icon.svg",
      commName: "Diabetes Management Hub",
      commStats : "27k"
    },
    {
      commImg: "./resources/community_icon.svg",
      commName: "Mental Health Support ",
      commStats : "17k"
    },
    {
      commImg: "./resources/community_icon.svg",
      commName: "Heart Health Forum",
      commStats : "20k"
    },
    {
      commImg: "./resources/community_icon.svg",
      commName: "Chronic Pain Warriors",
      commStats : "37k"
    },
    {
      commImg: "./resources/community_icon.svg",
      commName: "Cancer Fighters CircleName",
      commStats : "23k"
    },
    {
      commImg: "./resources/community_icon.svg",
      commName: "Women's Wellness Corner",
      commStats : "12k"
    },
    {
      commImg: "./resources/community_icon.svg",
      commName: "Parenting and Pediatrics Zone",
      commStats : "245k"
    },
    {
      commImg: "./resources/community_icon.svg",
      commName: "Nutrition and Wellness Hub",
      commStats : "27k"
    },
    {
      commImg: "./resources/community_icon.svg",
      commName: "Fitness and Exercise Club",
      commStats : "27k"
    },
     
  ];
  return (
    <div className="scrollable-div nav-item-container nav-communities-container">
      {communityData.map((data,index)=>(
        <Link
        key={index}
        onClick={() => {
          setCommunity({commImg:`${data.commImg}`, commName: `${data.commName}`,commStats:`${data.commStats}`});
          setCommunityMiddle({commImg:'',commName:'',commTitle:'',commContent:''})
        }}
        to="Community-Profile"
      >
        <NavCommunity
          imgSrc={data.commImg}
          name={data.commName}
        />
      </Link>
      ))}
      
    </div>
  );
}

function NavCommunity({ imgSrc, name }) {
  return (
    <div className="hover-item nav-item nav-community community-container">
      <img className="visible-post-community-image" src={imgSrc} />
      <p className="visible-post-community-name">{name}</p>
    </div>
  );
}

function DisplayPostsNavItem({ text, imgsrc }) {
  return (
    <div className="hover-item community-container nav-item">
      <img className="nav-tab-img" src={imgsrc} />
      <p className="visible-post-community-name">{text}</p>
    </div>
  );
}

export default Navigator;
