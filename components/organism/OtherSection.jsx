import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import Heading from "../atom/Heading";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";

function OtherSectionBox() {
  return (
    <div className="flex items-center justify-between w-[100%] gap-[0px] px-[50px]">
      <div className="flex w-[25%] gap-[10px]">
        <div className="flex items-center justify-center h-[50px] w-[50px] border-[1px] rounded-full border-black">
          <LiaShippingFastSolid />
        </div>
        <div className="flex flex-col">
          <Heading level="2">Free Shipping</Heading>
          <Heading level="5">Free Shipping for orders over</Heading>
          <Heading level="5">£130</Heading>
        </div>
      </div>
      <div className="flex w-[25%] gap-[10px]">
        <div className="flex items-center justify-center h-[50px] w-[50px] border-[1px] rounded-full border-black">
          <FaGlobeAmericas />
        </div>
        <div className="flex flex-col">
          <Heading level="2">Money Guarantee</Heading>
          <Heading level="5">Within 30 days for an</Heading>
          <Heading level="5">exchange.</Heading>
        </div>
      </div>
      <div className="flex w-[25%] gap-[10px]">
        <div className="flex items-center justify-center h-[50px] w-[50px] border-[1px] rounded-full border-black">
          <FaBox />
        </div>
        <div className="flex flex-col">
          <Heading level="2">Online Support</Heading>
          <Heading level="5">24 hours a day, 7 days a</Heading>
          <Heading level="5">week</Heading>
        </div>
      </div>
      <div className="flex w-[25%] gap-[10px]">
        <div className="flex items-center justify-center h-[50px] w-[50px] border-[1px] rounded-full border-black">
          <TfiHeadphoneAlt />
        </div>
        <div className="flex flex-col">
          <Heading level="2">Flexible Payment</Heading>
          <Heading level="5"> Pay with Multiple Credit </Heading>
          <Heading level="5">Cards</Heading>
        </div>
      </div>
    </div>
  );
}

export default OtherSectionBox;
