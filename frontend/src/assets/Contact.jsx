import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className='flex h-screen items-center justify-center'>
      <div className="w-[600px]">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Contact Us</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='m-3 space-y-2'>
              <label>Name</label>
              <br />
              <input
                type="text"
                placeholder='Enter your name'
                className='w-full px-3 py-1 border rounded-md outline-none'
                {...register("name", { required: true })}
              />
              {errors.name && <span className="text-red-500">This field is required</span>}
            </div>
            <div className='m-3 space-y-2'>
              <label>Email</label>
              <br />
              <input
                type="email"
                placeholder='Enter your email'
                className='w-full px-3 py-1 border rounded-md outline-none'
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-red-500">This field is required</span>}
            </div>
            <div className='m-3 space-y-2'>
              <label>Message</label>
              <br />
              <textarea
                placeholder='Enter your message'
                className='w-full px-3 py-1 border rounded-md outline-none'
                {...register("message", { required: true })}
              />
              {errors.message && <span className="text-red-500">This field is required</span>}
            </div>
            <div className='flex justify-between mt-4'>
              <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                Send Message
              </button>
              <Link to="/" className='text-blue-500 underline hover:text-blue-700 duration-200'>
                Back to Home
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
