import React from 'react'
import ProductBox from '../atom/ProductBox'
import Heading from '../atom/Heading'
import { FaChevronDown } from "react-icons/fa";


function BestSellerSection() {
  return (
    <div className='my-[50px] px-[50px]'>
      <div className="flex items-center mb-[50px] justify-center gap-[10px]">
      <Heading level='7'>You are in</Heading>
      <Heading level='3'><u>best seller</u></Heading>
      <FaChevronDown />
      </div>
      <div className=" flex flex-wrap gap-[50px] ">
      <ProductBox 
      pathbg='/assits/images/bandimg.png' 
      pathhover='/assits/images/bandstrawbg.webp' 
      text1='Multi-corgo cotton shorts' 
      text2='$24.90'
      stlfrst='h-[30px] w-[30px] p-[5px] rounded-full bg-red-900'
      stlsec='h-[30px] w-[30px] p-[5px] rounded-full bg-green-500'
      stltrd='h-[30px] w-[30px] p-[5px] rounded-full bg-yellow-500'
      />
       <ProductBox 
      pathbg='/assits/images/bandimg.png' 
      pathhover='/assits/images/bandstrawbg.webp' 
      text1='Multi-corgo cotton shorts' 
      text2='$24.90'
      stlfrst='h-[30px] w-[30px] p-[5px] rounded-full bg-red-900'
      stlsec='h-[30px] w-[30px] p-[5px] rounded-full bg-green-500'
      stltrd='h-[30px] w-[30px] p-[5px] rounded-full bg-yellow-500'
      />
       <ProductBox 
      pathbg='/assits/images/bandimg.png' 
      pathhover='/assits/images/bandstrawbg.webp' 
      text1='Multi-corgo cotton shorts' 
      text2='$24.90'
      stlfrst='h-[30px] w-[30px] p-[5px] rounded-full bg-red-900'
      stlsec='h-[30px] w-[30px] p-[5px] rounded-full bg-green-500'
      stltrd='h-[30px] w-[30px] p-[5px] rounded-full bg-yellow-500'
      />
       <ProductBox 
      pathbg='/assits/images/bandimg.png' 
      pathhover='/assits/images/bandstrawbg.webp' 
      text1='Multi-corgo cotton shorts' 
      text2='$24.90'
      stlfrst='h-[30px] w-[30px] p-[5px] rounded-full bg-red-900'
      stlsec='h-[30px] w-[30px] p-[5px] rounded-full bg-green-500'
      stltrd='h-[30px] w-[30px] p-[5px] rounded-full bg-yellow-500'
      />
       <ProductBox 
      pathbg='/assits/images/bandimg.png' 
      pathhover='/assits/images/bandstrawbg.webp' 
      text1='Multi-corgo cotton shorts' 
      text2='$24.90'
      stlfrst='h-[30px] w-[30px] p-[5px] rounded-full bg-red-900'
      stlsec='h-[30px] w-[30px] p-[5px] rounded-full bg-green-500'
      stltrd='h-[30px] w-[30px] p-[5px] rounded-full bg-yellow-500'
      />
       <ProductBox 
      pathbg='/assits/images/bandimg.png' 
      pathhover='/assits/images/bandstrawbg.webp' 
      text1='Multi-corgo cotton shorts' 
      text2='$24.90'
      stlfrst='h-[30px] w-[30px] p-[5px] rounded-full bg-red-900'
      stlsec='h-[30px] w-[30px] p-[5px] rounded-full bg-green-500'
      stltrd='h-[30px] w-[30px] p-[5px] rounded-full bg-yellow-500'
      />
       <ProductBox 
      pathbg='/assits/images/bandimg.png' 
      pathhover='/assits/images/bandstrawbg.webp' 
      text1='Multi-corgo cotton shorts' 
      text2='$24.90'
      stlfrst='h-[30px] w-[30px] p-[5px] rounded-full bg-red-900'
      stlsec='h-[30px] w-[30px] p-[5px] rounded-full bg-green-500'
      stltrd='h-[30px] w-[30px] p-[5px] rounded-full bg-yellow-500'
      />
       <ProductBox 
      pathbg='/assits/images/bandimg.png' 
      pathhover='/assits/images/bandstrawbg.webp' 
      text1='Multi-corgo cotton shorts' 
      text2='$24.90'
      stlfrst='h-[30px] w-[30px] p-[5px] rounded-full bg-red-900'
      stlsec='h-[30px] w-[30px] p-[5px] rounded-full bg-green-500'
      stltrd='h-[30px] w-[30px] p-[5px] rounded-full bg-yellow-500'
      />
      </div>
      <button className='ml-[40%]  mt-[50px] h-[45px] w-[190px] bg-[#efefef] rounded-[10px] border-[1px] border-black hover:bg-black transition 0.3s ease-in hover:text-white'>
        Shope All Products
      </button>
    </div>
  )
}

export default BestSellerSection