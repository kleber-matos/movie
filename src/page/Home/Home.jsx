/** @format */

import React, { useEffect, useState } from "react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import * as S from "./style";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import Header from "../../components/Header/Header";
import Carrosel from "../../components/Carrosel/Carrosel";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function Home() {
  const [filmes, setFilmes] = useState([]);
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(true);

  const buscaDados = async () => {
    try {
      const dados = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=6040fbaaf2352854942894b5b45b4729&language=pt-BR&page=${page}`
      );

      console.log(dados.data.results);
      setFilmes(dados.data.results);
      setLoad(false);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("Finally");
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
    <div>
      <Header />
      <Carrosel />
      <S.SubTitle>
        <h2>SAIBA MAIS SOBRE SEU FILME FAVORITO</h2>
      </S.SubTitle>

      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        slidesPerView={4}
        spaceBetween={200}
        autoplay={{ delay: 4000 }}>
        {filmes.map((item) => (
          <SwiperSlide>
            <Link to={`/movie/${item.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <S.SubTitle>
        <h2>Todos os filmes</h2>
      </S.SubTitle>

      <S.ContainerFilmes>
        <section>
          {filmes.map((item) => (
            <S.Card key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt={item.title}
              />
              <h2>{item.title}</h2>
              <p>{item.release_date}</p>
              <p>
                Avaliação {item.vote_average} <FaStar />
              </p>
              <button>
                <Link to={`/movie/${item.id}`}>Saiba mais</Link>
              </button>
            </S.Card>
          ))}
        </section>
      </S.ContainerFilmes>

      <S.ButtonPages>
        <button onClick={() => beforePage()}>
          <AiOutlineDoubleLeft />
        </button>
        <p>{page}</p>
        <button onClick={() => nextPage()}>
          <AiOutlineDoubleRight />
        </button>
      </S.ButtonPages>
    </div>
  );
}
