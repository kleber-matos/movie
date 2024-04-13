/** @format */

import styled from "styled-components";

export const Container = styled.div`
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  height: 100vh;
  background-color: black;

  .imgFilme {
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 10vh;
    opacity: 0.2;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;

    .imgFilme {
      width: 100%;
      height: 90vh;
      position: absolute;
      z-index: 0;
    }
    @media (max-width: 800px) {
      /* border: solid red; */
      height: 90vh;
      background-color: black;
      img {
        /* border: solid red; */
        height: 90vh;
        opacity: 0.2;
      }
    }
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
  margin-left: 2rem;
  position: relative;
  z-index: 1;
  .logo {
    width: 100px;
    height: 100px;
  }
  @media (max-width: 800px) {
    /* border: solid 10px green; */
    width: 100%;
    margin-left: 0;
    height: 90vh;
    position: relative;
    z-index: 1;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-size: 4vw;
  }
  p {
    font-size: 1.3vw;
  }
  .icon {
    font-size: 1.3vw;
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1.5rem;
    }
    .icon {
      font-size: 1.3rem;
    }
  }
`;

export const Genero = styled.div`
  display: flex;
  font-size: 1.5vw;
  justify-content: space-between;
  /* border: solid; */
  width: 30%;

  @media (max-width: 800px) {
    /* border: solid yellow; */
    justify-content: start;
    width: 100%;
  }
`;

export const About = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 800px) {
    /* border: solid purple; */
    width: 100%;
    height: 70vh;
  }
`;

export const City = styled.div`
  p {
    font-size: 1.2vw;
  }
  @media (max-width: 800px) {
    /* border: solid purple; */
    p {
      font-size: 1.2rem;
    }
  }
`;

export const Sinopse = styled.div`
  height: 50%;

  h3 {
    font-size: 1.5vw;
  }

  p {
    color: #fffdfdac;
    font-size: 1.5vw;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 4; /* Limite de 5 linhas */
  }
  @media (max-width: 800px) {
    h3 {
      font-size: 3rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
`;

export const TagLink = styled.a`
  background-color: #f40612;
  color: white;
  width: 10vw;
  font-weight: 600;
  text-align: center;
  font-size: 1vw;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;

  .icon {
    font-size: 1vw;
  }

  @media (max-width: 800px) {
    /* border: solid purple; */
    width: 100%;
    font-size: 2rem;
    .icon {
      font-size: 2rem;
    }
  }
`;

export const Assistir = styled.section`
  height: 100vh;

  iframe {
    width: 100%;
    height: 100vh;
  }
`;
