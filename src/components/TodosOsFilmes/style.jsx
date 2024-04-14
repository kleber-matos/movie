/** @format */
import styled from "styled-components";
import load from "../../assets/loading.gif";

export const ContainerFilms = styled.div`
  text-align: center;
  width: 20vw;
  background-image: url(${load});
  background-repeat: no-repeat;
  background-size: contain;
  background-size: 100% 80%;

  img {
    width: 100%;
    height: 80%;
  }
  a {
    color: white;
  }

  @media (max-width: 800px) {
    width: 100vw;
  }
`;
