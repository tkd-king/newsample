import React from "react";
import Heading from "../atom/Heading";
import { FaArrowRightLong } from "react-icons/fa6";

function ReletherSection() {
  return (
    <div className="w-[100%] relative flex">
      <div className="w-[50%] ">
        <img className="w-full" src="/assits/images/image-card1.webp" alt="" />
      </div>
      <div className="w-[50%] overflow-hidden realtive">
        <img
          className="w-full  scale-100 hover:scale-105 hover:transition 0.3s"
          src="/assits/images/image-card2.webp"
          alt=""
        />
        <div className="absolute top-[50px] text-center flex flex-col gap-[20px]">
          <Heading level="2">New Collection</Heading>
          <Heading level="1">The Releather Beige Tennis Shoe</Heading>
        </div>
        <div className="absolute bottom-2 flex mx-[40px] border-t-[1px] pt-[20px] ">
          <Heading level="2">Shop New Collection</Heading>
          <FaArrowRightLong className="ml-[350px]" />
        </div>
      </div>
    </div>
  );
}

export default ReletherSection;
