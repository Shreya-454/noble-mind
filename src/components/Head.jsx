import React from 'react'
import Nav from './Nav'
import { Star } from './Icon'

const Head = () => {
  return (
    <div className=' min-h-screen md:min-h-[810px] bg-[url(./assets/images/nobleherobg.webp)] bg-left  bg-no-repeat bg-cover flex flex-col'>
    <Nav/> 
      <div className=' flex-grow flex items-center'>
          <div className="container max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3" data-aos="zoom-in">
            <div className=' flex items-center gap-[6px] mb-2 justify-center md:justify-normal'>
                <Star/>
                <p className=' font-exo text-[#131200] sm:text-base text-sm'>AI With Noble Mind</p>
            </div>
            <h1 className=' font-outfit md:text-[64px] sm:text-6xl min-[490px]:text-5xl text-4xl md:leading-[76.8px] font-light text-black mb-4 text-center md:text-start'>Inspiring Innovation, <span className='md:block'>Elevating Solutions –</span><span className=' md:block font-mont font-extrabold md:leading-[70.4px]'> Noble Mind"</span></h1>
            <p className=' font-exo sm:text-base text-sm font-normal text-black text-center md:text-start'>At Noble Mind is a forward-thinking AI specialised company dedicated to <span className='sm:block'>reshaping the future of how we live, work, and learn. Our mission is to create</span><span className='sm:block'>ground-breaking AI solutions for Healthcare, Education, and beyond, aligning</span> with Saudi Arabia’s Vision 2030.”</p>
          </div>
      </div>
    </div>
  )
}

export default Head
