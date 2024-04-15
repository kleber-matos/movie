/** @format */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { AiFillPlayCircle } from "react-icons/ai";
import * as S from "./style";
import axios from "axios";

import Loading from "../../components/Loading/Loading";
import Header from "../../components/Header/Header";
import Carrosel from "../../components/Carrosel/Carrosel";
import Footer from "../../components/Footer/Footer";
import TodosOsFilmes from "../../components/TodosOsFilmes/TodosOsFilmes";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

export default function Home() {
  const [filmes, setFilmes] = useState([]);
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(true);

  const buscaDados = async () => {
    try {
      const dados = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=6040fbaaf2352854942894b5b45b4729&language=pt-BR&page=${page}`
      );
      setFilmes(dados.data.results);
      setLoad(false);
      // console.log(dados.data.results);
    } catch (err) {
      console.error(err);
    } finally {
      // console.log("Finally");
    }
  };

  const nextPage = () => {
    if (page < 100) {
      setPage((prev) => prev + 1);
    }
  };
  const beforePage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    buscaDados();
  }, [page]);

  if (load) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <Carrosel />

      <S.SubTitle>
        {/* <h2>SAIBA MAIS SOBRE SEU FILME FAVORITO</h2> */}
        <h2>foi</h2>
      </S.SubTitle>

      {/* <S.Favoritos>
        <Swiper
          breakpoints={{
            1: {
              width: 576,
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              width: 768,
              slidesPerView: 2,
              spaceBetween: 0,
            },
          }}
          modules={[Navigation, Autoplay, Pagination]}
          slidesPerView={2}
          autoplay={{ delay: 4000 }}>
          {filmes.map((item, id) => (
            <SwiperSlide key={id}>
              <Link to={`/movie/${item.id}`}>
                <div>
                  <AiFillPlayCircle className="play" />
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.Favoritos> */}

      {/* <S.Favoritos>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}>
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          ...
        </Swiper>
      </S.Favoritos> */}

      <S.SubTitle>
        <h2>Todos os filmes</h2>
      </S.SubTitle>

      <S.SectionFilms>
        {filmes.map((item, id) => (
          <TodosOsFilmes
            key={id}
            imagem={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
            title={item.title}
            id={item.id}
          />
        ))}
      </S.SectionFilms>

      <S.Pagination>
        <S.ButtonPages>
          <button onClick={() => beforePage()}>
            <AiOutlineDoubleLeft />
          </button>
          <p>{page}</p>
          <button onClick={() => nextPage()}>
            <AiOutlineDoubleRight />
          </button>
        </S.ButtonPages>
      </S.Pagination>

      <Footer />
    </>
  );
}
