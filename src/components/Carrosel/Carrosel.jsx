/** @format */
import styled from "styled-components";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import filme1 from "../../assets/filme1.jpg";
import filme2 from "../../assets/filme2.jpg";
import filme3 from "../../assets/filme3.jpg";
import filme4 from "../../assets/filme4.jpg";
import filme5 from "../../assets/filme5.jpg";

export default function Carrosel() {
  const Container = styled.div`
    .swiper-button-next::after {
      color: #ffffff;
    }
    .swiper-button-prev::after {
      color: #ffffff;
    }

    .swiper-pagination .swiper-pagination-bullet {
      background-color: #ffffff;
    }
  `;

  const Imagem = styled.img`
    width: 100%;
    height: 80vh;
    opacity: 0.5;
    background-color: black;

    @media (max-width: 800px) {
      width: 100%;
      height: 40vh;
    }
  `;

  return (
    <Container>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}>
        <SwiperSlide>
          <Imagem src={filme1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Imagem src={filme2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Imagem src={filme3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Imagem src={filme4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Imagem src={filme5} alt="" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
