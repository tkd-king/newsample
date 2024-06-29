import { CiHeart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
//yay dono har bar lay jani h
import { RiRectangleFill } from "react-icons/ri";
import { BsTriangleFill } from "react-icons/bs";



import Heading from '@/components/atom/Heading'
import React from 'react'
import "../../app/globals.css"

function ProductBox({pathbg, pathhover, text1, text2 ,stlfrst, stlsec,stltrd}) {
  return (
    <div className='w-[250px] relative overflow-hidden'>
        <img className='w-[100%]' src={pathbg} alt="" />
        <div className="first absolute top-0 opacity-0 hover:opacity-[100%]">
          <img className='image w-[230px]' src={pathhover} alt="" />
        <div className="favorit flex flex-col items-center justify-center gap-[10px] absolute top-[20px] right-[-50px] hover:transition 0.5s ease-right">
          <div className="h-[40px] w-[40px] bg-white flex items-center justify-center rounded-full hover:bg-[#222] hover:text-white"><CiHeart /></div>
          <div className="h-[40px] w-[40px] bg-white flex items-center justify-center rounded-full hover:bg-[#222] hover:text-white"><FaEye /></div>
        </div>
        <div className="bottom absolute bottom-[-45px] left-[15%] items-center justify-center hover:transition 0.5s ease-out">
          <button className="h-[45px] w-[190px] bg-[#efefef] rounded-[10px] hover:bg-black hover:text-white">
            Select options
          </button>
          </div>
          </div>
        <div className="my-[20px]">
        <Heading level='5'>{text1}</Heading>
        <Heading level='5'>{text2}</Heading>
        </div>
        <div className="flex relative gap-[10px]">
          <div className={stlfrst}></div>
          <div className={stlsec}></div>
          <div className={stltrd}></div>
          <div className="new  absolute opacity-0 top-[0px] ml-[0px] h-[25px] rounded-[10px] w-[50px] bg-[#222] z-[1000000] cursor-pointer hover:opacity-[100%] hover:top-[-35px]">
            <BsTriangleFill className="text-[#222] ml-[20px] mt-[20px] rotate-180 " />
           <div className="absolute top-[-2px] left-[10px]"> <Heading level="11">Red</Heading></div>
            <RiRectangleFill  className="text-black opacity-0 cursor-pointer bg-red-900 mt-[30px] w-[50px] rotate-90 top-[0] absolute right-[8px]"/>

          </div>
          <div className="new  absolute opacity-0 top-[0px] ml-[25px] h-[25px] rounded-[10px] w-[50px] bg-[#222] z-[1000000] cursor-pointer hover:opacity-[100%] hover:top-[-35px]">
            <BsTriangleFill className="text-[#222] ml-[20px] mt-[20px] rotate-180 " />
           <div className="absolute top-[-2px] left-[10px]"> <Heading level="11">Green</Heading></div>
            <RiRectangleFill  className="text-black opacity-0 cursor-pointer bg-red-900 mt-[30px] w-[50px] rotate-90 top-[0] absolute right-[8px]"/>

          </div>
          <div className="new  absolute opacity-0 top-[0px] ml-[70px] h-[25px] rounded-[10px] w-[50px] bg-[#222] z-[1000000] cursor-pointer hover:opacity-[100%] hover:top-[-35px]">
            <BsTriangleFill className="text-[#222] ml-[20px] mt-[20px] rotate-180 " />
           <div className="absolute top-[-2px] left-[10px]"> <Heading level="11">Yellow</Heading></div>
            <RiRectangleFill  className="text-black opacity-0 cursor-pointer bg-red-900 mt-[30px] w-[50px] rotate-90 top-[0] absolute right-[8px]"/>

          </div>
        </div>
        
    </div>
  )
}

export default ProductBox