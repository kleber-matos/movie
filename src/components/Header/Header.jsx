/** @format */
import * as S from "./styles";
import { Link } from "react-router-dom";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Header() {
  return (
    <S.Header>
      <S.List>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link>
            Filmes
            <BiSolidMoviePlay />
          </Link>
        </li>
        <li>
          <Link>Tv</Link>
        </li>
        <li>
          <Link>Séries</Link>
        </li>
      </S.List>
      <S.Lupa>
        <input placeholder="Buscar filme..." type="text" />
        <FaMagnifyingGlass />
      </S.Lupa>
    </S.Header>
  );
}
