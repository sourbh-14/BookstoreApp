import React from 'react';
import {useState,useEffect} from "react"; 
import list from '../public/list.json';
import Cardscourse from './assets/Cardscourse';
import axios from "axios"; 
function Course() {
  const[book,setBook]=useState([]); 
  useEffect(()=>{
    const getBook=async()=>{
      try{
       const res = await axios.get("http://localhost:4001/book"); 
       console.log(res.data); 
       setBook(res.data); 
      } catch(error){
         console.log("error",error); 
      }
    }
    getBook(); 
  },[]); 
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl md:text-4xl'>
          We're delighted to have <span className='text-pink-500'>you here! :)</span>
        </h1>
        <p className='mt-12'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dicta laudantium cumque hic consectetur, non dolore possimus quam, voluptates velit distinctio ipsa? Accusamus odio sunt a! Labore nam facere commodi!
        </p>
        <button 
          className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'
          onClick={() => window.history.back()}
        > 
          Back
        </button>
      </div>
      <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {book.map((item) => (
          <Cardscourse key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Course;
