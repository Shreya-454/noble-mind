import React from 'react'
import triangle from '../assets/images/triangle.webp'
import { One, Star, Three, Two } from './Icon'
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Virtual,
} from "swiper/modules";
import chooseimg from '../assets/images/chooseimg.webp'

const Choose = () => {
  return (
    <div className='lg:pt-[151px] md:pt-20 pt-10 relative z-[1]' id='choose'>
      <img src={triangle} alt="tri"  className=' absolute top-[15%] left-[3%] hidden lg:block'/>
      <img src={triangle} alt="tri" className=' absolute right-[1%] bottom-0 hidden lg:block z-[-1]' />
      <div className="container 2xl:max-w-[1320px] max-w-[1140px] mx-auto px-3">
      <img src={chooseimg} alt="img" className='lg:h-[527px] w-full md:mt-8 mt-0 block lg:hidden' data-aos="zoom-in"/>
<div data-aos="zoom-in">
  <div className="flex items-center justify-center gap-[6px] mb-2 max-lg:mt-5">
      <Star/>
      <p className=' font-exo text-sm sm:text-base text-[#131200] font-normal '>Why Choose Us</p>
  </div>
  <h2 className=' text-3xl md:text-5xl text-center md:leading-[57.6px] font-outfit'>Driving Innovation & <span className='md:block font-semibold'>Transforming Industries</span></h2>
</div>
<Swiper
         breakpoints={{
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
          modules={[Virtual, Navigation, Pagination, A11y, Autoplay]}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="!pb-[51px] lg:!pt-[51px] !pt-5"
          >
    <SwiperSlide>
        <div className='max-w-[364px] p-[18px] border border-solid border-[#A854E933] w-full bg-[#FDFDFF0D] rounded-xl h-[208px] cardslider  mx-auto' data-aos="zoom-out">
            <div className="w-[24px] h-[24px] border-[12px] box-content bg-white border-[#A854E93D] flex justify-center items-center rounded-full mb-[11px]">
                <One/>
            </div>
            <h3 className=' font-outfit text-base sm:text-xl leading-[25.2px] text-[#131200] mb-1'>Customer-Centric</h3>
            <p className=' font-exo text-sm sm:text-base font-normal text-[#131200] opacity-70 '>Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value.</p>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className='max-w-[364px] p-[18px] border border-solid border-[#A854E933] w-full bg-[#FDFDFF0D] rounded-xl !h-[208px] cardslider mx-auto' data-aos="zoom-out">
            <div className="w-[24px] h-[24px] border-[12px] box-content bg-white border-[#A854E93D] flex justify-center items-center rounded-full mb-[11px]">
               <Two/>
            </div>
            <h3 className=' font-outfit text-base sm:text-xl leading-[25.2px] text-[#131200] mb-1'>Workplace Harmony</h3>
            <p className=' font-exo text-sm sm:text-base font-normal text-[#131200] opacity-70 '>Create a nurturing and peaceful environment for our staff, fostering growth, well-being, and unity. We are more than a team; we are a family..</p>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className='max-w-[364px] p-[18px] border border-solid border-[#A854E933] w-full bg-[#FDFDFF0D] rounded-xl h-[208px] cardslider mx-auto' data-aos="zoom-out">
            <div className="w-[24px] h-[24px] border-[12px] box-content bg-white border-[#A854E93D] flex justify-center items-center rounded-full mb-[11px]">
              <Three/>
            </div>
            <h3 className=' font-outfit text-base sm:text-xl leading-[25.2px] text-[#131200] mb-1'>Ethical Leadership</h3>
            <p className=' font-exo text-sm sm:text-base font-normal text-[#131200] opacity-70 '>Maintain the highest standards in all practices, ensuring our solutions are responsible, safe, and transparent.</p>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className='max-w-[364px] p-[18px] border border-solid border-[#A854E933] w-full bg-[#FDFDFF0D] rounded-xl h-[208px] cardslider mx-auto' data-aos="zoom-out">
            <div className="w-[24px] h-[24px] border-[12px] box-content bg-white border-[#A854E93D] flex justify-center items-center rounded-full mb-[11px]">
                <p className=' text-transparent text-2xl bg-clip-text bg-btn-gradient font-outfit'>4</p>
            </div>
            <h3 className=' font-outfit text-base sm:text-xl leading-[25.2px] text-[#131200] mb-1'>Customer-Centric</h3>
            <p className=' font-exo text-sm sm:text-base font-normal text-[#131200] opacity-70 '>Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value.</p>
        </div>
    </SwiperSlide>
    </Swiper>
    <img src={chooseimg} alt="img" className='lg:h-[527px] w-full md:mt-8 mt-0 hidden lg:block' data-aos="zoom-in"/>
    </div>
    </div>
  )
}

export default Choose
