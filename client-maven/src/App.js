import React from 'react';
import { BrowserRouter , Routes ,Route } from 'react-router-dom';
import {Login} from './components/Auth/Login.Component'
import './App.css';
import { Feed } from './components/feed/feed'
import {SignUp} from './components/Auth/SignUp.Component'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      <Routes>
        <Route path='/feed' element={<Feed/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
