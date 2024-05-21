import React, { useState } from "react";
import UserContext from "./UserContext";
 
//isme children vo hoga jo jisme value pass ya access krni h
const UserContextProvider = ({children})=>{
    const [community, setCommunity] = useState({commImg: '',commName: 'Community', commStats:''}); 
    const [communityMiddle, setCommunityMiddle] = useState({commImg:'',commName:'Community',commTitle:'title',commContent:'content',commStats:'stats'})
    
    return (

//provider ke andr ek property milti hai value (provider ko jo dat pass krna ho kr skte ho)
        <UserContext.Provider value={{community, setCommunity,communityMiddle,setCommunityMiddle}}>
            {children};
        </UserContext.Provider>
    )
}

export default UserContextProvider