// UserProfile.js
import React, { useContext, useState,useEffect } from "react";
import UserContext from "../../contexts/UserContext";
import Post from "../post_preview";
import { getAuth } from 'firebase/auth';

const UserProfile = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [user,setUser] = useState('');
  useEffect(() => {
    const auth = getAuth();
    if (auth.currentUser) {
      // User is signed in
      setUser(auth.currentUser.email);
    } else {
      // No user is signed in
      setUser(null);
    }
  },[])
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div class="p-16 mb-5">
      <div class="p-8 bg-white shadow mt-24">
        <div class="grid grid-cols-1 md:grid-cols-3">
          <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
            <div>
              <p class="font-bold text-gray-700 text-xl">20K</p>
              <p class="text-gray-400">Followers</p>
            </div>
            <div>
              <p class="font-bold text-gray-700 text-xl">200</p>
              <p class="text-gray-400">Following</p>
            </div>
            <div>
              <p class="font-bold text-gray-700 text-xl">20</p>
              <p class="text-gray-400">Posts</p>
            </div>
          </div>
          <div class="relative">
            <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-24 w-24"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        <div class="mt-20 text-center border-b pb-12">
          <h1 class="text-4xl font-medium text-gray-700">{user}</h1>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
