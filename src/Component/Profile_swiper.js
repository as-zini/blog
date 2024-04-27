import "./Profile_swiper.js";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import school_icon from "../images/school_icon.png"
import email_icon from "../images/email_icon.png"
import github_icon from "../images/github_icon.png"
import insta_icon from "../images/insta_icon.png"
import tell_icon from "../images/tell_icon.png"

import './Profile_swiper.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Profile_swiper () {

  return(
    <div className="swiper_body">
    <Swiper className="swiper"
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{delay:2500, disableOnInteraction: false}}
      loop={true}
      >
      <SwiperSlide className="school">
        <img src={school_icon} className="school_icon"></img>
        <div>한국외국어대학교<br></br>영미문학문화학과<br></br>AI융합전공</div>
      </SwiperSlide>
      <SwiperSlide className="github">
        <img src={github_icon} className="github_icon"></img>
        <a href="https://github.com/as-zini">https://github.com/as-zini</a>
      </SwiperSlide>
      <SwiperSlide className="email">
        <img src={email_icon} className="email_icon"></img>
        <a href="mailto:aszini@naver.com">aszini@naver.com</a>
      </SwiperSlide>
      <SwiperSlide className="insta">
        <img src={insta_icon} className="insta_icon"></img>
        <div>@as_zini</div>
      </SwiperSlide>
      <SwiperSlide className="tell">
        <img src={tell_icon} className="tell_icon"></img>
        <a href="tell:01027194828">010-2719-4828</a>
      </SwiperSlide>

    </Swiper>
    </div>
  )
}