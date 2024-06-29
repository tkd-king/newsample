import React from "react";
import "../../app/globals.css";
import { FaInstagram } from "react-icons/fa";

function SocialBox({path}) {
  return (
    <div className="socialouter relative bg-cover overflow-hidden w-[20%]">
      <img
        className=" scale-95 hover:scale-100 transition 0.3s ease-in"
        src={path}
        alt=""
      />
      <div className="social h-[50px] w-[50px] top-[50%] right-[45%] bg-white absolute rounded-full flex items-center justify-center opacity-0 hover:transition 0.3s ease-out">
        <FaInstagram/>
      </div>
    </div>
  );
}

export default SocialBox;
