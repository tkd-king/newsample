"use client"

import AnchorTag from "../atom/Anchortag";
import "../../app/globals.css";
import Heading from "../atom/Heading";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { CiHeart } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import Link from "next/link";
import { IoIosArrowUp } from "react-icons/io";
//yay dono har bar lay jani h
import { RiRectangleFill } from "react-icons/ri";
import { BsTriangleFill } from "react-icons/bs";
import { React, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';





function Header() {
  useEffect(() => {
    AOS.init({
        duration: 800,
        once: false,
    });
}, []);


  return (
    <div  className="mx-[50px] relative " data-aos="fade-down">
      <link rel="icon" href="/assits/images/logo.avif" />
      <title>Minimog-The Next Genration Shopify Theme</title>
      <div className="flex items-center justify-between border-b-[1px] py-[20px]">
        <div id="head" className="flex items-center justify-center gap-[20px]">
          <div className="flex items-center jusitfy-center gap-[10px]">
            <FaFacebook />
            <Heading level="8"> 300k Followers</Heading>
          </div>
          <div className="gap-[10px] flex items-center jusitfy-center">
            <FaInstagram />
            <Heading level="8">100k Followers</Heading>
          </div>
        </div>
        <div className="flex">
          <div className="border-r-[1px] border-black pr-[10px]">
            <Heading level="8"> Open Doors To A World Of Fashion </Heading>
          </div>
          <div className="border-b-[1px] border-black ml-[10px]">
            <Heading level="8">Discover More</Heading>
          </div>
        </div>
        <div className="lang&coin">
          <select className='w-[100px] outline-none pl-[10px] txt-[#222] cursor-pointer'>
            <option value="hello">Engilsh</option>
            <option value="woed">France</option>
            <option value="loi">chines</option>
          </select>
          <select className='w-[100px] outline-none pl-[10px] text-[#222] cursor-pointer'>
            <option value="hello">USD</option>
            <option value="woed">CAD</option>
            <option value="loi">CNY</option>
            <option value="loi">EUR</option>
            <option value="loi">GBP</option>
            <option value="loi">HKD</option>
          </select>
        </div>
      </div>
      <div className=" py-[20px] flex items-center justify-start">
        <div className="menu flex items-center justify-between">
          <div className="flex"><AnchorTag href="/" text="Home " /><IoIosArrowUp /></div>
          <div className="flex"><AnchorTag href="/" text="Shope " /><IoIosArrowUp /></div>
          <div className="flex"><AnchorTag href="/" text="Products " /><IoIosArrowUp /></div>
          <div className="flex"><AnchorTag href="/" text="Pages " /><IoIosArrowUp /></div>
          <div className="flex"><AnchorTag href="/" text="Foxkit " /><IoIosArrowUp /></div>
        </div>
        <div className="logo bg-white w-[10%] ml-[170px]">
          <img src="/assits/images/logo.avif" alt="logo" />
        </div>
        <div className="icon relative flex items-center justify-center gap-[20px] ml-[340px]">
          <Link href='#' ><IoSearchOutline /></Link>
          <Link href='#' ><VscAccount /></Link>
          <Link href='#' ><CiHeart /></Link>
          <Link href='#' ><BsHandbag /></Link>
          <div className="new z-10  absolute opacity-0 top-[13px] mr-[110px] h-[25px] rounded-[10px] w-[70px] bg-[#222] z-[1000000] hover:opacity-[100%] hover:top-[23px]">
            <BsTriangleFill className="text-[#222] ml-[30px] mt-[-10px] " />
           <div className="absolute top-[-2px] left-[15px]"> <Heading level="11">Search</Heading></div>
            <RiRectangleFill  className="text-black opacity-0 cursor-pointer bg-red-900 mb-[100px] w-[50px] rotate-90 top-[0] absolute right-[10px]"/>

          </div>
          <div className="new z-10  absolute opacity-0 top-[13px] mr-[40px] h-[25px] rounded-[10px] w-[70px] bg-[#222] z-[1000000] hover:opacity-[100%]  hover:top-[23px]">
            <BsTriangleFill className="text-[#222] ml-[30px] mt-[-10px] " />
           <div className="absolute top-[-2px] left-[15px]"> <Heading level="11">Account</Heading></div>
            <RiRectangleFill  className="text-black opacity-0 cursor-pointer bg-red-900 mb-[100px] w-[50px] rotate-90 top-[0] absolute right-[10px]"/>

          </div>
          <div className="new  z-10 absolute opacity-0 top-[13px] mr-[-30px] h-[25px] rounded-[10px] w-[70px] bg-[#222] z-[1000000] hover:opacity-[100%] hover:top-[23px]">
            <BsTriangleFill className="text-[#222] ml-[30px] mt-[-10px] " />
           <div className="absolute top-[-2px] left-[15px]"> <Heading level="11">Wishlist</Heading></div>
            <RiRectangleFill  className="text-black opacity-0 cursor-pointer bg-red-900 mb-[100px] w-[50px] rotate-90 top-[0] absolute right-[10px]"/>

          </div>
          <div className="new z-10  absolute opacity-0 top-[13px] mr-[-100px] h-[25px] rounded-[10px] w-[50px] bg-[#222] z-[1000000] hover:opacity-[100%] hover:top-[23px]">
            <BsTriangleFill className="text-[#222] ml-[20px] mt-[-10px] " />
           <div className="absolute top-[-2px] left-[10px]"> <Heading level="11">Cart</Heading></div>
            <RiRectangleFill  className="text-black opacity-0 cursor-pointer bg-red-900 mb-[100px] w-[50px] rotate-90 top-[0] absolute right-[-5px]"/>

          </div>
          

        </div>
      </div>
      
    </div>
  );
}

export default Header;
