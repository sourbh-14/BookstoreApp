import React from 'react'
import { useAuth } from '../Context/Authprovider';
import toast from 'react-hot-toast';

function Logout() {
  const[authUser,setAuthUser]=useAuth(); 
  const handleLogout=() =>{
    try{ 
    setAuthUser({
      ...authUser,
      user:null,
    })
    localStorage.removeItem("Users");
     toast.success("Logout successfully");
     setTimeout(()=>{
      window.location.reload(); 
     },750);   
    }catch(error) {
     toast.error("Error :"+error.message); 
    }
  };
  return (
    <div>
      <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
       onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  ); 
}

export default Logout; 