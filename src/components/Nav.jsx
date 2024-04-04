import React, { useState } from 'react'
import logo from '../assets/images/logo.webp'
const Nav = () => {
    const [show, setshow] = useState(true);
    function nav() {
      setshow(!show);
      if (show === true) {
        document.body.classList.add("max-lg:overflow-hidden");
      } else {
        document.body.classList.remove("max-lg:overflow-hidden");
      }
    }
  return (
    <div className='bg-white'>
    <div className="container max-w-[1140px] 2xl:max-w-[1320px] px-3 mx-auto">
        <div className='flex items-center  py-[19px]  justify-between'>
          <img src={logo} alt="img" />
            <ul className={`flex gap-6 mobileView items-center ${ show ? "right-[-100%]" : "right-0"
        }`}>
                <li onClick={nav} className='mb-0 pb-0 leading-[0]'><a href="#"  className=' font-exo opacity-70 hover:opacity-100 duration-300  font-normal text-base text-[#131200]'>Home</a></li>
                <li onClick={nav}><a href="#"  className=' font-exo opacity-70 hover:opacity-100 duration-300  font-normal text-base text-[#131200]'>About Us</a></li>
                <li onClick={nav}><a href="#"  className=' font-exo opacity-70 hover:opacity-100 duration-300  font-normal text-base text-[#131200]'>Services</a></li>
                <li onClick={nav}><a href="#"  className=' font-exo opacity-70 hover:opacity-100 duration-300  font-normal text-base text-[#131200]'>Why Choose Us</a></li>
                <li onClick={nav}><a href="#"  className=' font-exo opacity-70 hover:opacity-100 duration-300  font-normal text-base text-[#131200]'>Blogs</a></li>
                <li onClick={nav}><a href="#"  className=' font-exo opacity-70 hover:opacity-100 duration-300  font-normal text-base text-[#131200]'>FAQ</a></li>
                <li className='pl-4'><button className=' bg-btn-gradient text-white  text-base font-outfit py-[14px] px-6 rounded-[4px] z-[1] before:z-[-1]  before:transition-all before:ease-linear before:hover:bg-white duration-300 before:duration-300 before:absolute before:left-[-100%] before:bg-transparent before:hover:left-[0] before:hover:w-full before:top-0 before:w-full before:h-full  relative overflow-hidden border-transparent border-[2px] hover:text-[#A854E9] hover:border-[#A854E9]'>Contact Us</button></li>
            </ul>
         
            
             <label className=" lg:hidden" onClick={nav}>
      {show ? (
        <div className="z-20 relative">
          <span className="flex bg-black h-[3px] rounded-3xl duration-300 w-6"></span>
          <span className="flex bg-black h-[3px] rounded-3xl duration-300 w-6 mt-1"></span>
          <span className="flex bg-black h-[3px] rounded-3xl duration-300 w-6 mt-1"></span>
        </div>
      ) : (
        <div className="z-20 relative">
          <span className="flex bg-black absolute rounded-3xl -left-7 duration-300 top-1 rotate-45 h-[3px] w-6"></span>
          <span className="flex bg-black absolute rounded-3xl -left-7 duration-300 -rotate-45 h-[3px] w-6 mt-1"></span>
        </div>
      )}
    </label>
        </div>
</div>
</div>
  )
}

export default Nav
