/** @format */

import styled from "styled-components";

export const Card = styled.div`
  border: solid 2px red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15vw;
  height: 50vh;
  margin: 1rem;

  img {
    width: 100%;
    height: 50%;
  }
  h2 {
    font-size: 19px;
  }
  p {
    font-size: 10px;
  }

  button a {
    font-size: 5px;
    background-color: #8a0000;
    font-size: 9px;
    font-weight: 600;
  }

  button {
    width: 60%;
    height: 7%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: #8a0000;
    cursor: pointer;
    border-radius: 5px;
  }

  @media (max-width: 800px) {
    width: 90%;
  }
`;

export const ButtonPages = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 30vw;
  button {
    border: none;
    cursor: pointer;
  }
`;

export const SubTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;

  h2 {
    font-size: 2rem;
    font-weight: 600;
  }

  @media (max-width: 800px) {
    height: 20vh;
    text-align: center;
  }
`;

export const Favoritos = styled.div`
  .play {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    color: #000000d8;
  }

  .play:hover {
    opacity: 0.7;
  }

  img {
    width: 100%;
  }

  img:hover {
    opacity: 0.4;
  }

  @media (max-width: 800px) {
    img {
      width: 100vw;
    }
  }
`;

export const SectionFilms = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const Pagination = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;

  button {
    border: none;
    background-color: transparent;
    color: white;
  }

  button:hover {
    color: red;
  }
`;
