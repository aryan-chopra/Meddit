import React, { useState } from "react";
import UserContext from "./UserContext";
 
//isme children vo hoga jo jisme value pass ya access krni h
const UserContextProvider = ({children})=>{
    const [community, setCommunity] = useState({commImg: '',commName: 'Community', commStats:''}); 
    const [communityMiddle, setCommunityMiddle] = useState({commImg:'',commName:'Community',commTitle:'title',commContent:'content',commStats:'stats'})
    // const [communityDisplay, setCommunityDisplay] = useState({commPostImg:'',commPostName:'Community',commPostTitle:'title',commPostContent:'content',commPostStats:'stats'})
    // const [popupData,setPopupData] = useState({commImg:'',commName:'',commTitle})
    //api calls idr kr skte hai and pass userCotext.provider mai kr skte hai
    return (

//provider ke andr ek property milti hai value (provider ko jo dat pass krna ho kr skte ho)
        <UserContext.Provider value={{community, setCommunity,communityMiddle,setCommunityMiddle}}>
            {children};
        </UserContext.Provider>
    )
}

export default UserContextProvider