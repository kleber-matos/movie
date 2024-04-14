/** @format */
import * as S from "../Movie/style";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loading from "../../components/Loading/Loading";
import Header from "../../components/Header/Header";
import { AiFillPlayCircle } from "react-icons/ai";

export default function PlaySeries() {
  const [filme, setFilme] = useState([]);
  const [load, setLoad] = useState(true);
  const { id } = useParams();
  const [assistir, setAssistir] = useState("");

  const buscaDados = async () => {
    try {
      const dados = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=6040fbaaf2352854942894b5b45b4729`
      );
      setAssistir(id);
      setFilme(dados.data);
      setLoad(false);
      console.log(dados.data);
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
          <S.Details>
            <S.Title>
              <h1>{filme.name}</h1>
              <p>Avaliação: {filme.vote_average}</p>
            </S.Title>

            <S.About>
              <S.City>
                <p>City of {filme.production_countries[0].name}</p>
                <p>{filme.tagline}</p>
              </S.City>

              <S.Sinopse>
                <h3>Sinopse</h3>
                <p>{filme.overview}</p>
              </S.Sinopse>
              <S.TagLink target="_blank" href={filme.homepage}>
                <AiFillPlayCircle className="icon" />
                Ver Trailer
              </S.TagLink>
              <S.TagLink href="#assistir">
                <AiFillPlayCircle className="icon" />
                assistir agora
              </S.TagLink>
            </S.About>
          </S.Details>
        </S.Details>

        <img
          className="imgFilme"
          src={`https://image.tmdb.org/t/p/w500/${filme.backdrop_path}`}
          alt="film"
        />
      </S.Container>

      <S.Assistir>
        <iframe
          mozallowfullscreen
          webkitallowfullscreen
          allowfullscreen
          id="assistir"
          src={`https://superflixapi.top/serie/${id}`}
          frameborder="0"></iframe>
      </S.Assistir>
    </>
  );
}
