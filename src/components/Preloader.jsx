import React from "react";
import logo from '../assets/images/logo.webp'
const Preloader = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center ">
      
    <div className="relative flex justify-center items-center flex-col">
    <div className="absolute animate-spin-slow rounded-full h-72 w-72 border-t-8 border-b-8 border-[#A854E9]"></div>
    <img src={logo} alt="logo" className="mb-10 animate-pulse" />
      <div className='flex space-x-2 justify-center items-center bg-white  '>
 	<span className='sr-only'>Loading...</span>
  	<div className='h-6 w-6  bg-btn-gradient rounded-full animate-bounce [animation-delay:-0.3s]'></div>
	<div className='h-6 w-6 bg-btn-gradient rounded-full animate-bounce [animation-delay:-0.15s]'></div>
	<div className='h-6 w-6 bg-btn-gradient rounded-full animate-bounce'></div>
</div>
</div>
      </div>
  );
};

export default Preloader;
