"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import SwiperBox from './SwiperBox';

export default function MySwiper() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
    <SwiperSlide><SwiperBox text='New Arrivals' text2='Ultimate Winter Warmer' text3='Shope Now' path="/assits/images/swiper4.avif "/></SwiperSlide>
        <SwiperSlide><SwiperBox text='New Arrivals' text2='Responsible Denim Lab' text3='Shope Now' path="/assits/images/swiper3.avif "/></SwiperSlide>
        <SwiperSlide><SwiperBox text='New Arrivals' text2='Venice Heute Couture' text3='Shope Now' path="/assits/images/swiper2.avif"/></SwiperSlide>
      </Swiper>
      </div>
  );
};
