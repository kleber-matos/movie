import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillStar, AiFillPlayCircle } from "react-icons/ai";

import * as S from "./style";
import { useParams } from "react-router-dom";

export default function Movie() {
  // const [filmes, setFilmes] = useState([]);
  const [filme, setFilme] = useState([]);
  const { id } = useParams();

  const buscaDados = async () => {
    try {
      const dados = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=6040fbaaf2352854942894b5b45b4729`
      );

      console.log(dados.data);
      setFilme(dados.data);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("Finally");
    }
  };

  useEffect(() => {
    buscaDados();
  }, []);

  return (
    <>
      {
        <S.Container>
          <S.Details>
            <img
              src={`https://image.tmdb.org/t/p/w500/${filme.backdrop_path}`}
              alt=""
            />
            <h1>{filme.title}</h1>
            <h3>{filme.release_date}</h3>{" "}
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
        </S.Container>
      }
    </>
  );
}
