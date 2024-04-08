import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../../assets/1.jpg'
import image2 from '../../assets/2.jpg'
import image3 from '../../assets/3.jpg'
import image4 from '../../assets/4.jpg'
import image5 from '../../assets/5.jpg'
import image6 from '../../assets/6.jpg'
import image7 from '../../assets/7.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
const Slider = () => {
  return (
    
  <div className='container mx-auto my-10'>
    <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className='img' src={image1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='img' src={image2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='img' src={image3} alt="" /></SwiperSlide>
        <SwiperSlide><img className='img' src={image4} alt="" /></SwiperSlide>
        <SwiperSlide><img className='img' src={image5} alt="" /></SwiperSlide>
        <SwiperSlide><img className='img' src={image6} alt="" /></SwiperSlide>
        <SwiperSlide><img className='img' src={image7} alt="" /></SwiperSlide>
       
      </Swiper>
  </div>
   
  );
};

export default Slider;