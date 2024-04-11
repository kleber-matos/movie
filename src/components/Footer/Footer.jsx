/** @format */
import { FaGithub } from "react-icons/fa";
import * as S from "./style";

export default function Footer() {
  return (
    <S.Footer>
      <p>Desenvolvido por Kleber Matos</p>
      <a target="_blank" href="https://github.com/kleber-matos">
        <FaGithub className="github" />
      </a>
    </S.Footer>
  );
}
