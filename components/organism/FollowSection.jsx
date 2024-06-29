import React from "react";
import Heading from "../atom/Heading";
import AnchorTag from "../atom/Anchortag";
import SocialBox from "../atom/SocialBox";

function FollowSection() {
  return (
    <div>
      <div className="uper flex flex-col text-center mt-[50px]">
        <Heading level="9">Follow us instagram</Heading>
        <Heading level="5"> Tag @minimog in your Instagram photos for a chance to be featuredhere.</Heading> 
            <div className="flex text-center ml-[450px]"> <Heading level="5">Find more inspiration on our Instagram.</Heading>
              <AnchorTag href='#' text='our Instagram.'/></div> 
        
      </div>
      <div className="flex gap-[20px] my-[50px] mx-[50px]">
        <SocialBox path='/assits/images/social1.png'/>
        <SocialBox path='/assits/images/social2.png'/>
        <SocialBox path='/assits/images/social3.png'/>
        <SocialBox path='/assits/images/social4.png'/>
        <SocialBox path='/assits/images/social5.png'/>
      </div>
    </div>
  );
}

export default FollowSection;
