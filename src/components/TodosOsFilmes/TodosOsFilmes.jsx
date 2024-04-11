/** @format */
import * as S from "./style";
import { Link } from "react-router-dom";

export default function TodosOsFilmes({ title, id, imagem }) {
  return (
    <S.ContainerFilms>
      <Link to={`/movie/${id}`}>
        {<img src={`https://image.tmdb.org/t/p/w500/${imagem}`} alt="films" />}

        <h2>{title}</h2>
      </Link>
    </S.ContainerFilms>
  );
}
