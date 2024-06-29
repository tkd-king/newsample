import SocialBox from '@/components/atom/SocialBox'
import BannerSlider from '@/components/organism/BannerSlider'
import BestSellerSection from '@/components/organism/BestSellerSection'
import FavoritProduct from '@/components/organism/FavoritProduct'
import FollowSection from '@/components/organism/FollowSection'
import Header from '@/components/organism/Header'
import MySwierSec from '@/components/organism/MySwiperSectionSec'
import ReletherSection from "@/components/organism/ReletherSection"
import SeasonCollection from '@/components/organism/SeasonCollection'
import OtherSectionBox from '@/components/organism/OtherSection'
import Footer from '@/components/organism/Footer'

function page() {
  return (
    <div>
      
      <Header/>
      <BannerSlider/>
      <MySwierSec/>
      <BestSellerSection/>
      <ReletherSection/>
      <SeasonCollection/>
      <FavoritProduct/>
      <FollowSection/>
      <SocialBox/>
      <OtherSectionBox/>
      <Footer/>
    </div>
  )
}

export default page