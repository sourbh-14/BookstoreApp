import React from 'react'; 
import Home from './assets/home';
import { Toaster } from 'react-hot-toast';

import {Navigate, Route, Routes } from "react-router-dom";
import Course from './Course';
import Courses from './courses/courses';
import Signup from './assets/Signup';
import Contact from './assets/Contact';
import { useAuth } from './Context/Authprovider';
import About from './assets/About';




function App() {
  const[authUser,setAuthUser]=useAuth();
  console.log(authUser);  
  return (
    <>
    {/* <Home/>
    <Course/> */}
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Course" element={ authUser?<Courses/>:<Navigate to="/signup"/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      
    </Routes>
    <Toaster/>
    
    </>
  )
}

export default App