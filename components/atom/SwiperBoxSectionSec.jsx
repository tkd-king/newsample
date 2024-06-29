import React from "react";
import BgImage from "./BgImageProp";
import Heading from "./Heading";
import Button from "./Button";
import { FaArrowRightLong } from "react-icons/fa6";
import "../../app/globals.css"

function SwiperBoxSec({ text, text2, path }) {
  return (
    <div className="relative first">
      <img className="bg-cover w-[100%]" src={path} alt="image" />
        <div className="flex absolute left-[10px] bottom-[10px]">
          <div className="flex flex-col">
            <Heading level="4" children={text} />
            <Heading level="5" children={text2} />
          </div>
          <div className="arrow h-[50px] w-[50px] flex items-center ml-[100px] justify-center bg-[white] transition 0.5s ease-in rounded-full text-black hover:text-white  hover:h-[55px] hover:w-[55px]">
            <FaArrowRightLong />
          </div>
        </div>
      </div>
  );
}

export default SwiperBoxSec;
