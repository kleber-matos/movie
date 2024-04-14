/** @format */
import React, { useEffect, useState } from "react";
import * as S from "../Home/style";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import axios from "axios";

import Loading from "../../components/Loading/Loading";
import Header from "../../components/Header/Header";

import Footer from "../../components/Footer/Footer";
import TodasAsSeries from "../../components/TodosOsFilmes/TodasAsSeries";
import {
  AiFillPlayCircle,
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Series() {
  const [filmes, setFilmes] = useState([]);
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(true);

  const buscaDados = async () => {
    try {
      const dados = await axios.get(
        `https://api.themoviedb.org/3/discover/tv?api_key=6040fbaaf2352854942894b5b45b4729&language=pt-BR&page=${page}`
      );
      setFilmes(dados.data.results);
      setLoad(false);
      console.log(dados.data.results);
    } catch (err) {
      console.error(err);
    } finally {
      // console.log("Finally");
    }
  };

  useEffect(() => {
    buscaDados();
  }, [page]);

  if (load) {
    return <Loading />;
  }

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

  return (
    <>
      <Header />

      <S.SubTitle>
        <h2>SAIBA MAIS SOBRE SUAS SÉRIES FAVORITAS</h2>
      </S.SubTitle>

      <S.Favoritos>
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
              <Link to={`/tv/${item.id}`}>
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
      </S.Favoritos>

      <S.SubTitle>
        <h2>Todas as séries</h2>
      </S.SubTitle>

      <S.SectionFilms>
        {filmes.map((item, id) => (
          <TodasAsSeries
            key={id}
            title={item.name}
            imagem={item.poster_path}
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
