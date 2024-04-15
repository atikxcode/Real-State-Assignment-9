import bg from '../../assets/2.jpg'
import bg1 from '../../assets/1.jpg'
import bg2 from '../../assets/5.jpg'
import bg3 from '../../assets/8.jpg'
import team1 from '../../assets/9.jpg'
import team2 from '../../assets/10.jpg'
import team3 from '../../assets/11.jpg'
import team4 from '../../assets/12.jpg'
import team5 from '../../assets/13.jpg'
import team6 from '../../assets/14.jpg'
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './AboutStyle.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import 'aos/dist/aos.css'
import Aos from "aos";


const About = () => {

  useEffect(() => {
    Aos.init();
  },[])

  return (
    <div className=' pb-24 bg-[#1b1b1b] p-10 '>
      <div className='flex justify-center text-white mb-24'  data-aos="fade-up" data-aos-duration="2000">
        <h2 className='text-[45px] font-medium'>About US</h2>
      </div>

      <div className='flex flex-col gap-24' >

      <div  data-aos="fade-up" data-aos-duration="2000">

      <div className='flex justify-center'>
      <div className='flex gap-12 '>

      

      <div className='flex flex-col gap-2'>
      <p className='text-[#b95c47] text-[15px]'>ABOUT US</p>
      <h2 className='text-[45px] text-white w-[550px]'>A Premier Destination for Luxury Real Estate in the Heart of New York</h2>
      <p className='w-[500px] text-[#FFFFFF99] leading-[30px]' >Welcome to the pinnacle of luxury living in New York City. Our premier destination offers a curated selection of the most prestigious properties, from opulent penthouses overlooking Central Park to exclusive waterfront estates along the Hudson River. Experience unparalleled sophistication, exceptional service, and timeless elegance as you embark on your journey to acquire or rent the epitome of New York real estate. Elevate your lifestyle and make your mark on the iconic skyline of the city that never sleeps.</p>
      </div>

      <div className=" p-4 bg-cover bg-center w-[225px] h-[400px] relative group rounded-lg hover:scale-95 duration-1000"  style={{backgroundImage: `url(${bg1})`}}></div>
      <div className=" p-4 bg-cover bg-center w-[225px] h-[400px] relative group rounded-lg hover:scale-95 duration-1000"  style={{backgroundImage: `url(${bg2})`}}></div>

      </div>
      </div>

      </div>

      <div  data-aos="fade-up" data-aos-duration="2000">

      <div className='flex justify-center'>
      <div className='flex gap-12 '>

      <div className=" p-4 bg-cover bg-center w-[450px] h-[400px] relative group rounded-lg hover:scale-95 duration-1000"  style={{backgroundImage: `url(${bg})`}}></div>

      <div className='flex flex-col gap-4'>
      <p className='text-[#b95c47] text-[15px]'>SINCE 2007</p>
      <h2 className='text-[45px] text-white w-[550px]'>The Story of Behind our Elite Shore Escape</h2>
      <p className='w-[500px] text-[#FFFFFF99] leading-[30px]' >Embark on a journey with Elite Shore Escapes, where every stay is a chapter in the story of indulgence and serenity. Our tale is one of unparalleled hospitality, where every detail is meticulously crafted to create unforgettable moments for our guests. From the breathtaking vistas of New York City to the personalized service that exceeds expectations, Elite Shore Escapes invites you to become a part of our story and experience luxury redefined.</p>
      </div>

      </div>
      </div>

      </div>

      <div  data-aos="fade-up" data-aos-duration="2000">

      <div className='flex justify-center'>

      <div className='flex gap-12 '>

      

      <div className='flex flex-col gap-4'>
      <p className='text-[#b95c47] text-[15px]'>EAT & DRINK</p>
      <h2 className='text-[45px] text-white w-[550px]'>Restaurant & Bar</h2>
      <p className='w-[500px] text-[#FFFFFF99] leading-[30px]'>Indulge in culinary excellence and exquisite libations at our sophisticated Restaurant & Bar. From innovative dishes to handcrafted cocktails, savor unforgettable moments in an ambiance of elegance and charm. Immerse yourself in a culinary journey where every dish tells a story of culinary mastery and creativity. Whether you're sipping on artisanal cocktails crafted by our expert mixologists or delighting in seasonal delicacies prepared by our renowned chefs, our Restaurant & Bar is the ultimate destination for discerning epicureans seeking unparalleled dining experiences.</p>
      </div>

      <div className=" p-4 bg-cover bg-center w-[450px] h-[400px] relative group rounded-lg hover:scale-95 duration-1000"  style={{backgroundImage: `url(${bg3})`}}></div>

      </div>
      </div>

      </div>



      <div  data-aos="fade-up" data-aos-duration="2000">

      <div className='flex flex-col  items-center '>
        <div className=' flex flex-col items-center text-center'>
        <p className='text-[#b95c47] text-[15px]'>PROFESSIONAL</p>
        <h2 className='text-[45px] text-white w-[550px]'>Meet Our Team</h2>
        </div>


        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div className='flex flex-col  hover:scale-95 duration-1000'>
      <div className=" p-4 bg-cover bg-center w-[350px] h-[400px] relative group  "  style={{backgroundImage: `url(${team1})`}}></div>
      <div className='flex flex-col text-white  bg-[#222] p-[30px] items-center'>
        <h2 className='text-[20px] mb-5'>Valentina Karla</h2>
        <p className='text-[#FFFFFF99] text-[15px]'>General Manager</p>
      </div>
      </div></SwiperSlide>
        <SwiperSlide><div className='flex flex-col  hover:scale-95 duration-1000'>
      <div className=" p-4 bg-cover bg-center w-[350px] h-[400px] relative group  "  style={{backgroundImage: `url(${team2})`}}></div>
      <div className='flex flex-col text-white  bg-[#222] p-[30px] items-center'>
        <h2 className='text-[20px] mb-5'>Micheal White</h2>
        <p className='text-[#FFFFFF99] text-[15px]'>Guest Service Department</p>
      </div>
      </div></SwiperSlide>
        <SwiperSlide><div className='flex flex-col  hover:scale-95 duration-1000'>
      <div className=" p-4 bg-cover bg-center w-[350px] h-[400px] relative group  "  style={{backgroundImage: `url(${team3})`}}></div>
      <div className='flex flex-col text-white  bg-[#222] p-[30px] items-center'>
        <h2 className='text-[20px] mb-5'>Olivia Martin</h2>
        <p className='text-[#FFFFFF99] text-[15px]'>Reservation Manager</p>
      </div>
      </div></SwiperSlide>
        <SwiperSlide><div className='flex flex-col  hover:scale-95 duration-1000'>
      <div className=" p-4 bg-cover bg-center w-[350px] h-[400px] relative group  "  style={{backgroundImage: `url(${team4})`}}></div>
      <div className='flex flex-col text-white  bg-[#222] p-[30px] items-center'>
        <h2 className='text-[20px] mb-5'>Marina Dana</h2>
        <p className='text-[#FFFFFF99] text-[15px]'>F&B Manager</p>
      </div>
      </div></SwiperSlide>
        <SwiperSlide><div className='flex flex-col  hover:scale-95 duration-1000'>
      <div className=" p-4 bg-cover bg-center w-[350px] h-[400px] relative group  "  style={{backgroundImage: `url(${team5})`}}></div>
      <div className='flex flex-col text-white  bg-[#222] p-[30px] items-center'>
        <h2 className='text-[20px] mb-5'>Enrico Brown</h2>
        <p className='text-[#FFFFFF99] text-[15px]'>Head Chef</p>
      </div>
      </div></SwiperSlide>
        <SwiperSlide><div className='flex flex-col  hover:scale-95 duration-1000'>
      <div className=" p-4 bg-cover bg-center w-[350px] h-[400px] relative group  "  style={{backgroundImage: `url(${team6})`}}></div>
      <div className='flex flex-col text-white  bg-[#222] p-[30px] items-center'>
        <h2 className='text-[20px] mb-5'>Victoria Dan</h2>
        <p className='text-[#FFFFFF99] text-[15px]'>Meetings and Events Manager</p>
      </div>
      </div></SwiperSlide>
        
      </Swiper>



      

      </div>

      </div>


      

      </div>
      
    </div>
  );
};

export default About;