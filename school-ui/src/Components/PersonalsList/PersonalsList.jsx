import React from 'react'
import "./PersonalsList.css"
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
function PersonalsList() {
  return (
    <div className='personals-list'>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default PersonalsList