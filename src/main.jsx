import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import CommunityPageHeader from './Components/CommunityPageHeader';
import PostHome from './Components/middle/PostHome';
import Login from './Components/authentication/Login';
import Auth from './Components/authentication/Auth';
import SignUp from './Components/authentication/Signup';
import PostDisplay from './Components/postDisplay/PostDisplay';
import CreatePost from './Components/createPost/CreatePost';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path={`/`} element={<App />}>
          <Route path="" element={<PostHome />} />
          <Route path={`Community-Profile`} element={<CommunityPageHeader />} />
          <Route path="PostDisplay" element={<PostDisplay />} />
          <Route path="/createPost" element={<createPost/>}/>
        </Route>
        <Route path="/authentication" element={<Auth/>}>
          <Route path='sign-in' element={<Login/>}/>
          <Route path='sign-up' element={<SignUp/>}/>
        </Route>
        <Route path='/create-post' element={<CreatePost/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

