import React from "react"

import {Swiper, SwiperSlide} from "swiper/react"
import {Navigation, Pagination} from "swiper"

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
      modules={[Navigation, Pagination]}
      spaceBetween={24}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      pagination={true}
      grabCursor={true}
      slidesPerView={1}
      slidesPerGroup={1}
      breakpoints={{
        350: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        1985: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
      }}
      className={Styles.slider}>
      {slides.map((obj) => (
        <SwiperSlide className={Styles.slide} key={obj.id}>
          <Message name={obj.name} photo={obj.photo} date={obj.date} comment={obj.comment} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider
