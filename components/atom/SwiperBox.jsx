"use client"

import { React, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BgImage from "./BgImageProp";
import Heading from "./Heading";
import Button from "./Button";

function SwiperBox({text, text2, text3, path}) {

  useEffect(() => {
    AOS.init({
        duration: 800,
        once: false,
    });
}, []);

  return (
    <div className="relative">
      <img className="bg-cover w-[100%] h-[400px]" src={path} alt="image" />
      <div className="flex flex-col items-start gap-[20px] absolute top-[100px] left-[100px]" data-aos="fade-up" >
        <Heading level="2" children={text} />
       <div className="w-[90%]"> <Heading level="1" children={text2} /></div>
      <button className="h-[45px] w-[135px] text-[#222] rounded-[10px] bg-[#efefef] border-[1px] border-black hover:bg-black hover:text-white">
        {text3}
      </button>
      </div>
    </div>
  );
}

export default SwiperBox;
