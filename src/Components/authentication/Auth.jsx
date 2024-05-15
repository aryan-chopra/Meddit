import React from 'react';
import Login from './Login';
import SignUp from './Signup';
import { Outlet } from 'react-router-dom';

import { initializeApp } from 'firebase/app';



const firebaseConfig = {
  apiKey: "AIzaSyDSRhUSTaxZSqxIaHPPKTSzNebo_v_g65U",
  authDomain: "meddit-18b77.firebaseapp.com",
  projectId:  "meddit-18b77",
  storageBucket: "meddit-18b77.appspot.com",
  messagingSenderId: "348877004239",
  appId: "1:348877004239:web:a9e0eaf9b37c6d3c1a06ba",
  measurementId: "G-JYE1FFG354"
};

const auth = initializeApp(firebaseConfig);

const Auth = () => {
  return (
    <div className=' w-full h-screen flex justify-center items-center'>
      <Outlet/>
    </div>
  );
};

export default Auth;
