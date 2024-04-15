/** @format */
import * as S from "./style.jsx";

// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import filme1 from "../../assets/filme1.jpg";
import filme2 from "../../assets/filme2.jpg";
import filme3 from "../../assets/filme3.jpg";
import filme4 from "../../assets/filme4.jpg";
import filme5 from "../../assets/filme5.jpg";

export default function Carrosel() {
  return (
    <S.Container>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}>
        <SwiperSlide>
          <S.Imagem src={filme1} alt="film" />
        </SwiperSlide>
        <SwiperSlide>
          <S.Imagem src={filme2} alt="film" />
        </SwiperSlide>
        <SwiperSlide>
          <S.Imagem src={filme3} alt="film" />
        </SwiperSlide>
        <SwiperSlide>
          <S.Imagem src={filme4} alt="film" />
        </SwiperSlide>
        <SwiperSlide>
          <S.Imagem src={filme5} alt="film" />
        </SwiperSlide>
      </Swiper>

      {/* <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}>
        <SwiperSlide>
          <S.Imagem src={filme1} alt="film" />
        </SwiperSlide>

        <SwiperSlide>
          <S.Imagem src={filme2} alt="film" />
        </SwiperSlide>

        <SwiperSlide>
          <S.Imagem src={filme3} alt="film" />
        </SwiperSlide>

        <SwiperSlide>
          <S.Imagem src={filme4} alt="film" />
        </SwiperSlide>

        <SwiperSlide>
          <S.Imagem src={filme5} alt="film" />
        </SwiperSlide>
      </Swiper> */}
    </S.Container>
  );
}
