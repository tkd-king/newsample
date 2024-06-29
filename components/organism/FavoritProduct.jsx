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
import ProductBox from '../atom/ProductBox';

function FavoritProduct() {
  return (
    <div className="w-[100%] flex">
      <div className="w-[50%]">
        <>
         
          <div className=" my-[50px] pl-[50px] flex flex-col text-center gap-[10px]">
            <Heading level="2">Favorite Products</Heading>
            <Heading level="3">Shope This Look</Heading>
          </div>
          <div className='swiperfav '>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <ProductBox 
      pathbg='/assits/images/bandimg.png' 
      pathhover='/assits/images/bandstrawbg.webp' 
      text1='Multi-corgo cotton shorts' 
      text2='$24.90'
      stlfrst='h-[30px] w-[30px] p-[5px] rounded-full bg-red-900'
      stlsec='h-[30px] w-[30px] p-[5px] rounded-full bg-green-500'
      stltrd='h-[30px] w-[30px] p-[5px] rounded-full bg-yellow-500'
      />
        </SwiperSlide>
        <SwiperSlide>
        <ProductBox 
      pathbg='/assits/images/bandimg.png' 
      pathhover='/assits/images/bandstrawbg.webp' 
      text1='Multi-corgo cotton shorts' 
      text2='$24.90'
      stlfrst='h-[30px] w-[30px] p-[5px] rounded-full bg-red-900'
      stlsec='h-[30px] w-[30px] p-[5px] rounded-full bg-green-500'
      stltrd='h-[30px] w-[30px] p-[5px] rounded-full bg-yellow-500'
      />
        </SwiperSlide>
        <SwiperSlide>
        <ProductBox 
      pathbg='/assits/images/bandimg.png' 
      pathhover='/assits/images/bandstrawbg.webp' 
      text1='Multi-corgo cotton shorts' 
      text2='$24.90'
      stlfrst='h-[30px] w-[30px] p-[5px] rounded-full bg-red-900'
      stlsec='h-[30px] w-[30px] p-[5px] rounded-full bg-green-500'
      stltrd='h-[30px] w-[30px] p-[5px] rounded-full bg-yellow-500'
      />
        </SwiperSlide>
        <SwiperSlide>
        <ProductBox 
      pathbg='/assits/images/bandimg.png' 
      pathhover='/assits/images/bandstrawbg.webp' 
      text1='Multi-corgo cotton shorts' 
      text2='$24.90'
      stlfrst='h-[30px] w-[30px] p-[5px] rounded-full bg-red-900'
      stlsec='h-[30px] w-[30px] p-[5px] rounded-full bg-green-500'
      stltrd='h-[30px] w-[30px] p-[5px] rounded-full bg-yellow-500'
      />
        </SwiperSlide>
        <SwiperSlide>
        <ProductBox 
      pathbg='/assits/images/bandimg.png' 
      pathhover='/assits/images/bandstrawbg.webp' 
      text1='Multi-corgo cotton shorts' 
      text2='$24.90'
      stlfrst='h-[30px] w-[30px] p-[5px] rounded-full bg-red-900'
      stlsec='h-[30px] w-[30px] p-[5px] rounded-full bg-green-500'
      stltrd='h-[30px] w-[30px] p-[5px] rounded-full bg-yellow-500'
      />
        </SwiperSlide>
        <SwiperSlide>
        <ProductBox 
      pathbg='/assits/images/bandimg.png' 
      pathhover='/assits/images/bandstrawbg.webp' 
      text1='Multi-corgo cotton shorts' 
      text2='$24.90'
      stlfrst='h-[30px] w-[30px] p-[5px] rounded-full bg-red-900'
      stlsec='h-[30px] w-[30px] p-[5px] rounded-full bg-green-500'
      stltrd='h-[30px] w-[30px] p-[5px] rounded-full bg-yellow-500'
      />
        </SwiperSlide>
        <SwiperSlide>
        <ProductBox 
      pathbg='/assits/images/bandimg.png' 
      pathhover='/assits/images/bandstrawbg.webp' 
      text1='Multi-corgo cotton shorts' 
      text2='$24.90'
      stlfrst='h-[30px] w-[30px] p-[5px] rounded-full bg-red-900'
      stlsec='h-[30px] w-[30px] p-[5px] rounded-full bg-green-500'
      stltrd='h-[30px] w-[30px] p-[5px] rounded-full bg-yellow-500'
      />
        </SwiperSlide>
        <SwiperSlide>
        <ProductBox 
      pathbg='/assits/images/bandimg.png' 
      pathhover='/assits/images/bandstrawbg.webp' 
      text1='Multi-corgo cotton shorts' 
      text2='$24.90'
      stlfrst='h-[30px] w-[30px] p-[5px] rounded-full bg-red-900'
      stlsec='h-[30px] w-[30px] p-[5px] rounded-full bg-green-500'
      stltrd='h-[30px] w-[30px] p-[5px] rounded-full bg-yellow-500'
      />
        </SwiperSlide>
      </Swiper>
    </div>
        </>
      </div>
      <div className="w-[50%] relative">
        <img src="/assits/images/fav2.webp" alt="" />
        <div className=" absolute h-[20px] cursor-pointer w-[20px] bg-[#222] top-[261px] left-[285px] rounded-full z-[10000000]" >
        <div className="hide absolute translate-y-[50px] opacity-0 bg-white w-[200px] pl-[10px] rounded-lg shadow-lg transition 1s ease-top hover:opacity-[100%] hover:translate-y-6">
            <Heading level='5'>Seamless Crop top</Heading>
            <Heading level='12'>$12.00</Heading>
            <div className="bg-black w-[20px] absolute h-[100px] left-[0] opacity-0 top-[-60px]">..</div>
          </div>
        </div>
        <div className="favdiv absolute h-[30px] w-[30px] bg-[#222] top-[272px] left-[295px] rounded-full z-5"></div>
        <div className="favdivtow opacity-[20%] absolute h-[30px] w-[30px] bg-[#222] top-[272px] left-[295px] rounded-full z-9"></div>
    {/* dosra curcle */}
    <div className=" absolute h-[20px] cursor-pointer w-[20px] bg-[#222] top-[389px] left-[310px] rounded-full z-[10000000]" >
    <div className="hide absolute translate-y-[50px] opacity-0 bg-white w-[200px] pl-[5px] rounded-lg shadow-lg transition 1s ease-top hover:opacity-[100%] hover:translate-y-6">
            <Heading level='5'>Seamless Cycling shorts</Heading>
            <Heading level='12'>$14.00</Heading>
            <div className="bg-black w-[20px] absolute h-[100px] left-[0] opacity-0 top-[-60px]">..</div>
          </div>
        </div>
        <div className="favdiv absolute h-[30px] w-[30px] bg-[#222] top-[399px] left-[320px] rounded-full z-5"></div>
        <div className="favdivtow opacity-[20%] absolute h-[30px] w-[30px] bg-[#222] top-[399px] left-[320px] rounded-full z-9"></div>

      </div>
    </div>
  );
}

export default FavoritProduct;
