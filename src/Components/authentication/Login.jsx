import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User signed in:', user);
      navigate('/');
    } catch (error) {
      setError('login failed');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="main-con w-[50rem] h-[30rem] flex flex-row rounded-lg">
      <img src="../../public/resources/Meddit-auth-img.png"/>
      <div className="container w-[25rem] h-[30rem] flex flex-col justify-center bg-slate-100 p-5">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button type="submit" className='bg-[#93ebe1] text-black py-2 px-4 rounded hover:bg-[#59e4d3] w-full font-bold'>
          Login
        </button>
      </form>
    </div>
    </div>
  );
};

export default Login;
