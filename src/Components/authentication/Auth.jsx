import React from 'react';
import Login from './Login';
import Signup from './Signup';
import { Outlet } from 'react-router-dom';
import { auth } from '../../firebaseConfig';

const Auth = () => {
  return (
    <div className=' w-full h-screen flex justify-center items-center'>
      <Outlet/>
    </div>
  );
};

export default Auth;
