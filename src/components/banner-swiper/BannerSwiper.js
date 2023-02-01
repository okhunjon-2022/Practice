import React, { useRef, useState } from "react";
import Rec48 from "../../assets/bannerSwiper/Rec48.png"
import Rec49 from "../../assets/bannerSwiper/Rec49.png"
import Rec50 from "../../assets/bannerSwiper/Rec50.png"



// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./BannerSwiper.css"


// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function BannerSwiper() {
  return (
    <div className="bannerSwiper">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,   
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper1"
      >
        <SwiperSlide>
          <img src={Rec48} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Rec49} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Rec50} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Rec48} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Rec49} />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src={Rec50} />
        </SwiperSlide>
        
      </Swiper>

      
    </div>
  );
}
