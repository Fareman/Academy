import React from "react"

import {Swiper, SwiperSlide} from "swiper/react"
import {Navigation, Pagination, Thumbs} from "swiper"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/thumbs"
import Styles from "./Slider.scss"

import Message from "../Message"

function Slider({slides}) {
  return (
    <Swiper
      loop={true}
      modules={[Navigation, Pagination, Thumbs]}
      spaceBetween={24}
      navigation={true}
      pagination={true}
      grabCursor={true}
      slidesPerView={2}
      slidesPerGroup={2}
      className={Styles.slider}>
      {slides.map((obj) => (
        <SwiperSlide className={Styles.slide}>
          <Message name={obj.name} photo={obj.photo} date={obj.date} comment={obj.comment} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider
