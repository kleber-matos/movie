/** @format */
import * as S from "./style";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar, AiFillPlayCircle } from "react-icons/ai";

import Loading from "../../components/Loading/Loading";
import Header from "../../components/Header/Header";

export default function Movie() {
  const [filme, setFilme] = useState([]);
  const [load, setLoad] = useState(true);
  const { id } = useParams();

  const buscaDados = async () => {
    try {
      const dados = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=6040fbaaf2352854942894b5b45b4729`
      );
      setFilme(dados.data);
      setLoad(false);
      // console.log(dados.data);
    } catch (err) {
      console.log(err);
    } finally {
      // console.log("Finally");
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

      <S.Container>
        <S.Details>
          <S.Title>
            <h1>{filme.title}</h1>
            <S.Genero>
              <p>{filme.release_date}</p>|<p>{filme.genres[0].name}</p>
            </S.Genero>
            <p>
              Avaliação: {filme.vote_average} |
              <span>
                <AiFillStar />
              </span>
            </p>
          </S.Title>

          <S.About>
            <p>City of {filme.production_countries[0].name}</p>
            <p>{filme.tagline}</p>
            <div>
              <h3>Sinopse</h3>
              <p>{filme.overview}</p>
            </div>
            <S.TagLink target="_blank" href={filme.homepage}>
              <AiFillPlayCircle />
              Ver Trailer
            </S.TagLink>
          </S.About>
        </S.Details>
        <img
          className="imgFilme"
          src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`}
          alt="film"
        />
      </S.Container>
    </>
  );
}
