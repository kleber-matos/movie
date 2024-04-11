/** @format */
import { styled } from "styled-components";

export const Container = styled.div`
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

export const Imagem = styled.img`
  width: 100%;
  height: 80vh;
  opacity: 0.5;
  background-color: black;

  @media (max-width: 800px) {
    width: 100%;
    height: 40vh;
  }
`;
