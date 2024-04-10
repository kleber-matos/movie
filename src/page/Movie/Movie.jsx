/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillStar, AiFillPlayCircle } from "react-icons/ai";

import * as S from "./style";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import Header from "../../components/Header/Header";

export default function Movie() {
  // const [filmes, setFilmes] = useState([]);
  const [filme, setFilme] = useState([]);
  const [load, setLoad] = useState(true);
  const { id } = useParams();

  const buscaDados = async () => {
    try {
      const dados = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=6040fbaaf2352854942894b5b45b4729`
      );
      console.log(dados.data);
      setFilme(dados.data);
      setLoad(false);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("Finally");
    }
  };

  useEffect(() => {
    buscaDados();
  }, []);

  if (load) {
    return <Loading />;
  }

  return (
    <>
      <Header />

      {
        <S.Container>
          <S.Center>
            <img
              src={`https://image.tmdb.org/t/p/w500/${filme.backdrop_path}`}
              alt=""
            />
            <S.Details>
              <h1>{filme.title}</h1>
              <h3>{filme.release_date}</h3>
              <div>
                <h3>Avaliação: {filme.vote_average}</h3> |
                <AiFillStar />
              </div>
              <p>{filme.tagline}</p>
              <h3>Sinopse</h3>
              <p>{filme.overview}</p>
              <S.Trailer target="_blank" href={filme.homepage}>
                <AiFillPlayCircle />
                Ver Trailer
              </S.Trailer>
            </S.Details>
          </S.Center>
        </S.Container>
      }
    </>
  );
}
