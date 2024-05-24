import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Loader from './Loader/Loader';
import Meddit from '../Meddit';


function Tyson() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate('/authentication/sign-in');
  }, 3800);
  
  return (<Meddit/>);
}

export default Tyson
