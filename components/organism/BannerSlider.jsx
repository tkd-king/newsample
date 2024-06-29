"use client";

import { React, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../../app/globals.css";
import { IoColorPaletteOutline } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { LuShoppingCart } from "react-icons/lu";
import SwiperBox from "../atom/SwiperBox";
import MySwiper from "../atom/MySwiper";
import Heading from "../atom/Heading";
import AnchorTag from "../atom/Anchortag";
import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";
import { RiRectangleFill } from "react-icons/ri";

import { BsTriangleFill } from "react-icons/bs";

function BannerSlider() {
  useEffect(() => {
    AOS.init({
        duration: 800,
        once: false,
    });
}, []);

  return (
    <div className="relative">
      <div className="foxkit-popup__teaser bottom_left bg-[#DA3F3F] ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          fill="none"
        >
          <path
            fill="#fff"
            d="M1.14895 15.09625V8.5719h5.51649v6.89685H1.52005c-.0488 0-.097-.0096-.1421-.0284-.045-.0187-.0859-.0461-.1203-.0807-.0345-.0346-.0618-.0757-.0805-.1209-.0186-.0452-.0282-.0936-.0282-.1425zm7.18563.3725h5.14543c.09841 0 .19279-.0393.26238-.1091.06959-.0699.10869-.1646.10869-.2634V8.5719h-5.5165v6.89685zM.83985 7.76546h5.82559V5.21857H.83985c-.0488 0-.097.00963-.142.02835a.36979.36979 0 00-.1204.08076c-.0345.0346-.0618.07567-.0805.12087a.374677.374677 0 00-.0282.14256v1.80181c0 .04892.0096.09736.0282.14256.0187.0452.046.08627.0805.12087a.369604.369604 0 00.1204.08075c.045.01873.0932.02836.142.02836zm7.49473 0h5.8256a.369813.369813 0 00.142-.02835.371231.371231 0 00.12039-.08076.372698.372698 0 00.08043-.12087.373778.373778 0 00.02825-.14256V5.59111a.374008.374008 0 00-.02824-.14257c-.01865-.0452-.04598-.08627-.08044-.12086a.370914.370914 0 00-.12039-.08076.369626.369626 0 00-.142-.02835H8.33457l.00001 2.54689zM2.17965 1.43727C2.17965-.22865 5.49588.17071 7.5 3.29048c2.00412-3.11977 5.32037-3.51913 5.32037-1.8532 0 1.66455-2.27716 3.05247-5.32037 3.05247-3.04325 0-5.32035-1.38792-5.32035-3.05247v-.00001zm5.63406 2.71001c1.24133-.16531 3.46397-1.18994 3.46397-2.07854 0-.37341-.31988-.55209-.78214-.46154-.67905.133-2.05951 1.46591-2.68183 2.54008zM3.72235 2.06873c0 .88861 2.22261 1.91323 3.46394 2.07854C6.56398 3.0731 5.18355 1.7402 4.50445 1.6072c-.4622-.09056-.7821.08812-.7821.46153z"
          ></path>
        </svg>
        <span>Get a discount</span>
      </div>
      <div className="f-showcase-initialed">
        <div class="f-showcase__toolbar relative pl-[0px] flex flex-col gap-[20px] items-center justify-center">
          <div className="new  absolute opacity-0 top-[5px] mr-[100px] h-[25px] rounded-[10px] w-[100px] bg-[#222] z-[1000000] hover:opacity-[100%] hover:mr-[170px]">
            <BsTriangleFill className="text-[#222] ml-[95px] mt-[4px] rotate-90" />
           <div className="absolute top-[-2px] left-[10px]"> <Heading level="11">preview demos</Heading></div>
            <RiRectangleFill  className="text-black opacity-0 cursor-pointer bg-red-900 mb-[100px] w-[100px] top-[0] absolute right-[-45px]"/>

          </div>
          <div className="new  absolute opacity-0 top-[38px] mr-[100px] h-[25px] rounded-[10px] w-[120px] bg-[#222] z-[1000000] hover:opacity-[100%] hover:mr-[170px]">
            <BsTriangleFill className="text-[#222] ml-[115px] mt-[4px] rotate-90" />
           <div className="absolute top-[-2px] left-[10px]"> <Heading level="11">Exploare FoxEcom Affiliate Program</Heading></div>
            <RiRectangleFill  className="text-black opacity-0 cursor-pointer bg-red-900 mb-[100px] w-[100px] top-[0] absolute right-[-45px]"/>

          </div>
          <div className="new  absolute opacity-0 top-[76px] mr-[100px] h-[25px] rounded-[10px] w-[90px] bg-[#222] z-[1000000] hover:opacity-[100%] hover:mr-[170px]">
            <BsTriangleFill className="text-[#222] ml-[85px] mt-[4px] rotate-90" />
           <div className="absolute top-[-2px] left-[10px]"> <Heading level="11">Perchase Minimog</Heading></div>
            <RiRectangleFill  className="text-black opacity-0 cursor-pointer bg-red-900 mb-[100px] w-[100px] top-[0] absolute right-[-45px]"/>

          </div>
          <IoColorPaletteOutline className="text-white cursor-pointer" />
          <AiOutlineDollarCircle className="text-white cursor-pointer" />
          <LuShoppingCart className="text-white cursor-pointer" />

        </div>
      </div>
      <MySwiper />
      <div className=" absolute bottom-[20px] right-[20px] flex z-50">
        <span className="border-r-[1px] border-black pr-[10px]">
          <Heading level="5">The ReCotton Tee</Heading>
        </span>
        <span className="border-b-[1px] border-black ml-[10px]">
          {" "}
          <AnchorTag href="#" text="Shope Now" />
        </span>
      </div>
      <Link href={"#head"}>
        <div className="f-showcase-initialed">
          <div className="newstyle items-center justify-center h-[50px] w-[50px] rounded-full text-white hover:h-[55px] transition 1s ease-in hover:w-[55px] ">
            <FaArrowUp />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BannerSlider;
