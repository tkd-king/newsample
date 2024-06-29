import React from "react";
import ProductBox from "../atom/ProductBox";
import Heading from "../atom/Heading";

function SeasonCollection() {
  return (
    <>
    <div className=" mt-[100px] w-[100%] text-center">
        <Heading level="3">Season Collection</Heading>
    </div>
    <div className="my-[50px] px-[50px] flex gap-[50px]">
      <div className="1 w-[30%]  overflow-hidden">
        <img
          className="w-[100%] scale-95 hover:scale-100 transition 0.5s ease-in"
          src="/assits/images/seasonbox1.webp"
          alt=""
        />

        <Heading level="9">The Cashmere Cardigan</Heading>
        <Heading level="5">
          Add a free personalized note during checkout.
        </Heading>
        <button className="h-[45px] mt-[20px] w-[200px] text-[#222] rounded-[10px] bg-[#efefef] border-[1px] border-black hover:bg-black hover:text-white hover:transition 0.3s">
          Shop Cardigans
        </button>
      </div>
      <div className="1 w-[30%] overflow-hidden">
        <img
          className="w-[100%] scale-95 hover:scale-100 transition 0.5s ease-in"
          src="/assits/images/seasonbox2.webp"
          alt=""
        />

        <Heading level="9">The Cashmere Cardigan</Heading>
        <Heading level="5">
          Add a free personalized note during checkout.
        </Heading>
        <button className="h-[45px] mt-[20px] w-[200px] text-[#222] rounded-[10px] bg-[#efefef] border-[1px] border-black hover:bg-black hover:text-white hover:transition 0.3s">
          Shop Cardigans
        </button>
      </div>
      <div className="1 w-[30%] overflow-hidden">
        <img
          className="w-[100%] scale-95 hover:scale-100 transition 0.5s ease-in"
          src="/assits/images/seasonbox3.webp"
          alt=""
        />

        <Heading level="9">The Cashmere Cardigan</Heading>
        <Heading level="5">
          Add a free personalized note during checkout.
        </Heading>
        <button className="h-[45px] mt-[20px] w-[200px] text-[#222] rounded-[10px] bg-[#efefef] border-[1px] border-black hover:bg-black hover:text-white hover:transition 0.3s">
          Shop Cardigans
        </button>
      </div>
   
    </div>
    </>
  );
}

export default SeasonCollection;
