import React from 'react'
import footlogo from '../assets/images/footlogo.webp'
import { Facebook, Insta, Linked, Twitter } from './Icon'
const Footer = () => {
  return (
    <div className=' bg-[url(./assets/images/footerbg.webp)] pt-20 md:pt-[138px] bg-cover bg-center bg-no-repeat pb-5 md:pb-[35px]'>
      <div className="container max-w-[1140px] mx-auto px-3 pb-[52px]">
<div className="flex flex-row flex-wrap -mx-3">
    <div className="sm:w-1/2 w-full px-3 max-sm:mb-10">
<img src={footlogo} alt="logo" className=' md:mb-7 mb-4' />
<p className=' font-exo text-white text-sm sm:text-base font-normal mb-2'>Follow Us</p>
<div className=' flex gap-4'>
<a href="">
    <div className="rounded-full flex justify-center items-center border border-solid border-[#FDFDFF] h-11 w-11 hover:scale-110 duration-300">
        <Facebook/>
    </div>
</a>
<a href="">
    <div className="rounded-full flex justify-center items-center border border-solid border-[#FDFDFF] h-11 w-11 hover:scale-110 duration-300">
        <Insta/>
    </div>
</a>
<a href="">
    <div className="rounded-full flex justify-center items-center border border-solid border-[#FDFDFF] h-11 w-11 hover:scale-110 duration-300">
      <Twitter/>
    </div>
</a>
<a href="">
    <div className="rounded-full flex justify-center items-center border border-solid border-[#FDFDFF] h-11 w-11 hover:scale-110 duration-300">
        <Linked/>
    </div>
</a>
</div>
    </div>
    <div className="sm:w-1/2 w-full px-3 sm:flex  justify-end  ">
        <div className="flex flex-row flex-wrap -mx-3 sm:max-w-[325px] w-full">
<div className="w-1/2 px-3 ">
    <ul className=' pl-0'>
        <li className=' text-white text-sm sm:text-base font-outfit font-semibold mb-4'>Maine</li>
        <li className=' mb-[14px]'><a href="" className=' text-[#FDFDFF] opacity-70 font-exo text-sm sm:text-base font-normal text-center'>Home</a></li>
        <li className=' mb-[14px]'><a href="" className=' text-[#FDFDFF] opacity-70 font-exo text-sm sm:text-base font-normal'>About Us</a></li>
        <li className=' mb-[14px]'><a href="" className=' text-[#FDFDFF] opacity-70 font-exo text-sm sm:text-base font-normal'>services</a></li>
        <li><a href="" className=' text-[#FDFDFF] opacity-70 font-exo text-sm sm:text-base font-normal'>Why Choose Us</a></li>
    </ul>
</div>
<div className="w-1/2 px-3 sm:flex justify-end">
    <ul>
        <li className=' text-white text-sm sm:text-base font-outfit font-semibold mb-4'>Legal</li>
        <li className=' mb-[14px]'><a href="" className=' text-[#FDFDFF] opacity-70 font-exo text-sm sm:text-base font-normal text-center'>Term & Conduction</a></li>
        <li className=' mb-[14px]'><a href="" className=' text-[#FDFDFF] opacity-70 font-exo text-sm sm:text-base font-normal'>Privacy Policy</a></li>
        <li className=' mb-[14px]'><a href="" className=' text-[#FDFDFF] opacity-70 font-exo text-sm sm:text-base font-normal'>Contact</a></li>
        <li><a href="" className=' text-[#FDFDFF] opacity-70 font-exo text-sm sm:text-base font-normal'>(629) 555-0129</a></li>
    </ul>
</div>
        </div>
    </div>
</div>
      </div>
      <div className="w-full h-[1px] bg-[#FFFFFF4D]"></div>
      <div className="container max-w-[1140px] mx-auto px-3">
<p className=' text-xs sm:text-sm font-exo text-white opacity-70 text-center pt-4'>© Copyright 2023 Noble Mind | All rights reserved. </p>
      </div>
    </div>
  )
}

export default Footer
