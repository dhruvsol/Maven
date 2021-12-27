import React from 'react';
import { BrowserRouter , Routes ,Route } from 'react-router-dom';
import {Login} from './components/Auth/Login.Component'
import './App.css';
import {SignUp} from './components/Auth/SignUp.Component'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
