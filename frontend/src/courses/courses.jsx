import React from 'react'
import Navbar from '../assets/Navbar'
import Course from '../Course'
import Footer from '../assets/footer'
import list from "../../public/list.json"; 
function Courses() {
    console.log(list); 
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'><Course/></div>
    <Footer/>
    </>
  )
}

export default Courses