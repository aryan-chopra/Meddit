// import React, { useContext } from "react";
// import UserContext from "../contexts/UserContext";

// function AnnouncementBlock() {
//   const  {community,communityMiddle} = useContext(UserContext);
//   return (
//     <div className="main-container flex flex-col mt-8 bg-[#eaf5fa] mr-7 rounded-2xl p-3">
//       <div className="info w-full h-auto px-2 py-2 flex flex-col gap-2  border-b-2 border-white ">
//         <p className="heading">{communityMiddle.commName || community.commName}</p>
//         <p className="description-x text-slate-500 text-sm">
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error at
//           blanditiis explicabo debitis ipsa hic totam aut voluptatum,
//           accusantium dicta.
//         </p>
//         <div className="stats flex flex-row gap-2 justify-center mt-3">
//           <div className="stats-member">
//             <p className="stats-member-num font-bold ">{community.commStats || communityMiddle.commStats}</p>
//             <p className="stats-member-name text-slate-400">Member</p>
//           </div>
//           <div className="stats-member">
//             <p className="stats-member-num font-bold">300</p>
//             <p className="stats-member-name text-slate-400">Posts</p>
//           </div>
//         </div>
//       </div>
//       <div className="other-communities w-full h-auto py-2 px-2">
//         <p>Moderators</p>
//         <div className="moderators-list mt-5 flex flex-col gap-5">
//           <div className="list-items flex flex-row items-center gap-3">
//             <img
//               src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_6.png"
//               alt="u/STL avatar"
//               className="w-10 rounded-full"
//             />
//             <p>Community_abc</p>
//           </div>
//           <div className="list-items flex flex-row items-center gap-3">
//             <img
//               src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_6.png"
//               alt="u/STL avatar"
//               className="w-10 rounded-full"
//             />
//             <p>Community_abc</p>
//           </div>
//           <div className="list-items flex flex-row items-center gap-3">
//             <img
//               src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_6.png"
//               alt="u/STL avatar"
//               className="w-10 rounded-full"
//             />
//             <p>Community_abc</p>
//           </div>
//           <div className="list-items flex flex-row items-center gap-3">
//             <img
//               src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_6.png"
//               alt="u/STL avatar"
//               className="w-10 rounded-full"
//             />
//             <p>Community_abc</p>
//           </div>
//         </div>
//         <div className="message-btn w-full h-auto px-2 py-2 mt-3">
//           <button className="w-full h-9 bg-slate-300 rounded-2xl ">
//             <span>Message</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AnnouncementBlock;

import React, { useEffect, useState, useContext } from "react";
import UserContext from "../contexts/UserContext";

function AnnouncementBlock() {
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
      className={`main-container flex flex-col mt-8 mr-7 rounded-2xl p-3 ${
        darkMode ? "bg-gray-800 text-white" : "bg-[#eaf5fa] text-black"
      }`}
    >
      <div className="info w-full h-auto px-2 py-2 flex flex-col gap-2 border-b-2 border-white">
        <p className="heading text-xl font-bold">
          {communityMiddle.commName || community.commName}
        </p>
        <p className="description-x text-slate-500 text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error at
          blanditiis explicabo debitis ipsa hic totam aut voluptatum,
          accusantium dicta.
        </p>
        <div className="stats flex flex-row gap-2 justify-center mt-3">
          <div className="stats-member">
            <p className="stats-member-num font-bold">
              {community.commStats || communityMiddle.commStats}
            </p>
            <p className="stats-member-name text-slate-400">Member</p>
          </div>
          <div className="stats-member">
            <p className="stats-member-num font-bold">300</p>
            <p className="stats-member-name text-slate-400">Posts</p>
          </div>
        </div>
      </div>
      <div className="other-communities w-full h-auto py-2 px-2">
        <p className="font-bold">Moderators</p>
        <div className="moderators-list mt-5 flex flex-col gap-5">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="list-items flex flex-row items-center gap-3">
              <img
                src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_6.png"
                alt="u/STL avatar"
                className="w-10 rounded-full"
              />
              <p>Community_abc</p>
            </div>
          ))}
        </div>
        <div className="message-btn w-full h-auto px-2 py-2 mt-3">
          <button
            className={`w-full h-9 rounded-2xl ${
              darkMode ? "bg-gray-700 text-white" : "bg-slate-300"
            }`}
          >
            <span>Message</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementBlock;
