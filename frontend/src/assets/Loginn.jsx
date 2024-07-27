
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios'; 
import toast from 'react-hot-toast';
function Loginn() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const modalRef = useRef(null);
  
    const onSubmit = async (data) => { // Add async to onSubmit
      const userInfo = {
        email: data.email,
        password: data.password,
      };
  
      try {
        const res = await axios.post("http://localhost:4001/user/login", userInfo);
        console.log(res.data);
        if (res.data) {
          toast.success('Login Successfully');
          setTimeout(()=>{
            window.location.reload();  
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          },750); 
          if (modalRef.current) {
            modalRef.current.close();
          }
        }
      } catch (err) {
        if (err.response) {
          console.log(err);
          toast.error("Error:"  + err.response.data.message);
        }
      }
    };
  
    const closeModal = () => {
      if (modalRef.current) {
        modalRef.current.close();
      }
    };
  
    return (
      <div>
        <dialog id="my_modal_3" className="modal" ref={modalRef}>
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              <button type="button" onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              <h3 className="font-bold text-lg">Login</h3>
              
              <div className='m-3 space-y-2'>
                <span>Email</span>
                <br />
                <input 
                  type="email" 
                  placeholder='Enter your email'
                  className='w-80 px-3 py-1 border rounded-md outline-none' 
                  {...register("email", { required: true })} 
                />
                {errors.email && <span className="text-red-500">This field is required</span>}
              </div>
              <div className='m-3 space-y-2'>
                <span>Password</span>
                <br />
                <input 
                  type="password" 
                  placeholder='Enter your password' 
                  className='w-80 px-3 py-1 border rounded-md outline-none'
                  {...register("password", { required: true })} 
                />
                {errors.password && <span className="text-red-500">This field is required</span>}
              </div>
              <div className='flex justify-around mt-4'>
                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
                <p>Not registered? <Link to="/signup" className="underline text-blue-500 cursor-pointer">Signup</Link></p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    );
}

export default Loginn