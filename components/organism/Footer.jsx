import React from "react";
import Heading from "../atom/Heading";
import { MdOutlineEmail } from "react-icons/md";
import AnchorTag from "../atom/Anchortag";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";






function Footer() {
  return (
    <div className="bg-[#f5f5f5] mt-[50px]">
      <div className="w-[100%] px-[100px] py-[50px] flex  justify-between">
        <div className="relative  w-[30%] flex flex-col gap-[10px] items-start">
          <Heading level="6">Let`s get in touch</Heading>
          <Heading level="6">
            Sign up for our newsletter and receive 10% off your
          </Heading>
          <input
            className="px-[50px] py-[11px] bg-white border-[1px] rounded-l-lg "
            type="email"
            placeholder="Email@gmail.com"
          />
          <div className="absolute top-[75px] left-[10px]">
            <MdOutlineEmail />
          </div>
          <div className="absolute cursor-pointer  top-[62px] left-[277px] flex items-center justify-center rounded-r-lg w-[50px] h-[48px] bg-white hover:bg-[#222] hover:text-white transition 0.3s ease-in">
          <FaArrowRight />

          </div>
        </div>
        <div className="w-[15%] flex flex-col items-start gap-[10px] pl-[50px]">
          <Heading level="2">Quick links</Heading>
          <AnchorTag href="#" text="My account" />
          <AnchorTag href="#" text="Cart" />
          <AnchorTag href="#" text="Wishlist" />
          <AnchorTag href="#" text="Product Compare" />
        </div>
        <div className="w-[25%] flex flex-col items-start gap-[10px] pl-[50px]">
          <Heading level="2">information</Heading>
         <AnchorTag href="#" text="Privacy policy" />
          <AnchorTag href="#" text="Refund policy" />
          <AnchorTag href="#" text="Shipping & Return" />
          <AnchorTag href="#" text="Term & conditions" />
        </div>
    
        <div className="w-[20%] flex flex-col items-start gap-[10px] pl-[50px]">
          <Heading level="2">Our store</Heading>
          <div className="flex gap-[10px]">
            <div className="h-[50px] w-[50px] rounded-full bg-[#e9e9e9] flex items-center justify-center  hover:bg-[#222] hover:text-white cursor-pointer "><FaPinterestP /></div>
            <div className="h-[50px] w-[50px] rounded-full bg-[#e9e9e9] flex items-center justify-center  hover:bg-[#222] hover:text-white cursor-pointer "><FaFacebook /></div>
            <div className="h-[50px] w-[50px] rounded-full bg-[#e9e9e9] flex items-center justify-center  hover:bg-[#222] hover:text-white cursor-pointer "><FaInstagram /></div>
            <div className="h-[50px] w-[50px] rounded-full bg-[#e9e9e9] flex items-center justify-center  hover:bg-[#222] hover:text-white cursor-pointer "><FaXTwitter /></div>
          </div>

        </div>
      </div>
      <div className=" pb-[30px] px-[90px] flex items-center justify-between">
      © MINIMOG 2024
      <img src="/assits/images/footer.png" alt="image" />

      </div>
    </div>
  );
}

export default Footer;
