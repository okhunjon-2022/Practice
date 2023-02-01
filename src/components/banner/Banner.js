import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import Video from "../../assets/banner/video.png"


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";

import "./Banner.css"

function Banner() {
  return (
    <div className='banner'>

        
        
        
        
        <Swiper
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className='mySlider'><div className="social__media">
            <div className="social__info">
            Хочу оставить отзыв о работе данного агенства. Сначала я делала у них полугодовую визу, но пришло время годовой (воеводской)🙂. Сделали все по максимуму быстро, поддерживали советами, как лучше все сделать — и в итоге сегодня я счастливая владелица воеводской визы! Очень благодарна Карине, которая работала по совместительству еще и бесплатным психологом для меня))))). Всем своим знакомым советую только Альянс-Персонал, который мне кстати также посоветовали знакомые). Спасибо вам, девочки за все что вы делаете!!!❤ Не теряйте той душевности, с которой Вы выполняете свою нелегкую работу)
            </div>
            <div className="social__video">
                <img src={Video} alt="" />
                </div>
            </div>
            </SwiperSlide>
        
      </Swiper>


      

    </div>
  )
}

export default Banner