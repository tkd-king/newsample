"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import SwiperBoxSec from '../atom/SwiperBoxSectionSec';
import Heading from '../atom/Heading';

export default function MySwierSec() {
  return (
    <> <div className=" my-[50px] pl-[50px]">
    <Heading level='3' >Shope by Categories</Heading>
    </div>
    <div className=' '>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><SwiperBoxSec text='Sunglasses' text2='1 items' path='/assits/images/section2.webp'/></SwiperSlide>
        <SwiperSlide><SwiperBoxSec text='Sunglasses' text2='1 items' path='/assits/images/section2.webp'/></SwiperSlide>
        <SwiperSlide><SwiperBoxSec text='Sunglasses' text2='1 items' path='/assits/images/section2.webp'/></SwiperSlide>
        <SwiperSlide><SwiperBoxSec text='Sunglasses' text2='1 items' path='/assits/images/section2.webp'/></SwiperSlide>
        <SwiperSlide><SwiperBoxSec text='Sunglasses' text2='1 items' path='/assits/images/section2.webp'/></SwiperSlide>
        <SwiperSlide><SwiperBoxSec text='Sunglasses' text2='1 items' path='/assits/images/section2.webp'/></SwiperSlide>
        <SwiperSlide><SwiperBoxSec text='Sunglasses' text2='1 items' path='/assits/images/section2.webp'/></SwiperSlide>
        <SwiperSlide><SwiperBoxSec text='Sunglasses' text2='1 items' path='/assits/images/section2.webp'/></SwiperSlide>
        <SwiperSlide><SwiperBoxSec text='Sunglasses' text2='1 items' path='/assits/images/section2.webp'/></SwiperSlide>
      </Swiper>
    </div>
    </>
  );
}
