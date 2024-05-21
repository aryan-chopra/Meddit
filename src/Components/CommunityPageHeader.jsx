// import React, { useContext } from "react";
// import CommunityPageMessage from "./CommunityPageMessage";
// import AnnouncementBlock from "./AnnouncementBlock";
// import UserContext from "../contexts/UserContext";

// function CommunityPageHeader() {
//   const {community,communityMiddle} = useContext(UserContext);
//   return (
//     <div className="mainn my-8 pb-7 mx-2 rounded-2xl bg-[#ebfbf9]">
//       <div className="inter-div w-full h-screen grid grid-rows-12 grid-cols-12 rounded-2xl bg-[#ebfbf9]">
//         <div className=" w-full h-full row-start-1 row-end-4 col-start-1 col-end-13 grid grid-rows-12 grid-cols-12 ">
//           <div className=" rounded-sm row-start-1 row-end-8 col-start-1 col-end-13">
//             <img
//               src="https://styles.redditmedia.com/t5_2r0ij/styles/bannerBackgroundImage_6gx1wewyz5x11.jpg?format=pjpg&s=5ac36526be277cd24336998655b70f621ce4e9bc"
//               alt="community-banner"
//               className="w-full h-full"
//             />
//           </div>
//           <div className="name-btn-img-div row-start-8 row-end-13 col-start-1 col-end-13 flex flex-row flex-wrap justify-between items-center mx-7 px-4 border-b-2 border-white bg-[#ebfbf9]">
//             <div className="post-name-div flex flex-row gap-3 flex-wrap">
//               <img
//                 src={community.commImg || communityMiddle.commImg}
//                 srcset=""
//                 sizes=""
//                 alt="r/announcements icon"
//                 className="w-14 h-14 rounded-full"
//               />
//               <div className="community-name flex flex-col  flex-wrap justify-center place-items-end">
//                 <p className="text-2xl">{communityMiddle.commName || community.commName}</p>
//               </div>
//             </div>
//             <div className="community-btn-div flex flex-row flex-wrap justify-between items-end gap-5 ">
//               <button className="bg-transparent rounded-3xl border border-slate-600 px-4 py-2 text-sm">
//                 <span>Create a Post</span>
//               </button>
//               <button className="bg-transparent rounded-3xl border border-slate-600 px-4 py-2 text-sm">
//                   <span>bell-icon</span>
//               </button>
//               <button className="bg-transparent rounded-3xl border border-slate-600 px-4 py-2 text-sm">
//                 <span className="text-sm">Join</span>
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="bg-[#ebfbf9] w-full h-full row-start-4 row-end-13 col-start-1 col-end-13 grid grid-row-12 grid-cols-12 mt-2">
//           <div className="community-message-col row-start-1 row-end-13 col-start-1 col-end-13 rounded-md pt-4 px-2 pb-4 mb-7 overflow-y-scroll hide-scrollbar">
//             <CommunityPageMessage commName={communityMiddle.commName || community.commName} commImg={community.commImg || communityMiddle.commImg}/>
//             <CommunityPageMessage commName={communityMiddle.commName || community.commName} commImg={community.commImg || communityMiddle.commImg}/>
//             <CommunityPageMessage commName={communityMiddle.commName || community.commName} commImg={community.commImg || communityMiddle.commImg}/>
//             <CommunityPageMessage commName={communityMiddle.commName || community.commName} commImg={community.commImg || communityMiddle.commImg}/>
//             <CommunityPageMessage commName={communityMiddle.commName || community.commName} commImg={community.commImg || communityMiddle.commImg}/>
//             <CommunityPageMessage commName={communityMiddle.commName || community.commName} commImg={community.commImg || communityMiddle.commImg}/>
//             <CommunityPageMessage commName={communityMiddle.commName || community.commName} commImg={community.commImg || communityMiddle.commImg}/>
//             <CommunityPageMessage commName={communityMiddle.commName || community.commName} commImg={community.commImg || communityMiddle.commImg}/>
//             <CommunityPageMessage commName={communityMiddle.commName || community.commName} commImg={community.commImg || communityMiddle.commImg}/>
//           </div>
//         </div>
//       </div>
//    </div>
//   );
// }

// export default CommunityPageHeader;


import React, { useContext, useEffect, useState } from "react";
import CommunityPageMessage from "./CommunityPageMessage";
import UserContext from "../contexts/UserContext";

function CommunityPageHeader() {
  const { community, communityMiddle } = useContext(UserContext);
  const [darkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      setDarkMode(mediaQuery.matches);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <div
      className={`mainn my-8 pb-7 mx-2 rounded-2xl ${
        darkMode ? "bg-gray-900 text-white" : "bg-[#ebfbf9] text-black"
      }`}
    >
      <div className="inter-div w-full h-screen grid grid-rows-12 grid-cols-12 rounded-2xl">
        <div className="w-full h-full row-start-1 row-end-4 col-start-1 col-end-13 grid grid-rows-12 grid-cols-12">
          <div className="rounded-sm row-start-1 row-end-8 col-start-1 col-end-13">
            <img
              src="https://styles.redditmedia.com/t5_2r0ij/styles/bannerBackgroundImage_6gx1wewyz5x11.jpg?format=pjpg&s=5ac36526be277cd24336998655b70f621ce4e9bc"
              alt="community-banner"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="name-btn-img-div row-start-8 row-end-13 col-start-1 col-end-13 flex flex-row flex-wrap justify-between items-center mx-7 px-4 border-b-2 border-white bg-inherit">
            <div className="post-name-div flex flex-row gap-3 flex-wrap">
              <img
                src={community.commImg || communityMiddle.commImg}
                alt="community icon"
                className="w-14 h-14 rounded-full"
              />
              <div className="community-name flex flex-col justify-center">
                <p className="text-2xl">
                  {communityMiddle.commName || community.commName}
                </p>
              </div>
            </div>
            <div className="community-btn-div flex flex-row gap-5">
              <button className="bg-transparent rounded-3xl border border-slate-600 px-4 py-2 text-sm">
                <span>Create a Post</span>
              </button>
              <button className="bg-transparent rounded-3xl border border-slate-600 px-4 py-2 text-sm">
                <span>bell-icon</span>
              </button>
              <button className="bg-transparent rounded-3xl border border-slate-600 px-4 py-2 text-sm">
                <span className="text-sm">Join</span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-full row-start-4 row-end-13 col-start-1 col-end-13 grid grid-rows-12 grid-cols-12 mt-2">
          <div className="community-message-col row-start-1 row-end-13 col-start-1 col-end-13 rounded-md pt-4 px-2 pb-4 mb-7 overflow-y-scroll hide-scrollbar">
            {Array.from({ length: 10 }).map((_, idx) => (
              <CommunityPageMessage
                key={idx}
                commName={communityMiddle.commName || community.commName}
                commImg={community.commImg || communityMiddle.commImg}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityPageHeader;
