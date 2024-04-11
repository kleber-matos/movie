/** @format */

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  .imgFilme {
    width: 35%;
    height: 90vh;
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
  /* border: red solid; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin-left: 2rem;
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
  /* border: solid; */
  height: 25vh;

  h1 {
    font-size: 4em;
  }
  @media (max-width: 800px) {
    /* border: solid pink; */
    height: 25vh;
    h1 {
      font-size: 2em;
    }
    p {
      font-size: 1em;
    }
  }
`;

export const Genero = styled.div`
  display: flex;
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
  height: 30vh;
  width: 50vw;
  /* border: solid red; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: 800px) {
    /* border: solid purple; */
    width: 100%;
    height: 70vh;
  }
`;

export const TagLink = styled.a`
  background-color: #f40612;
  color: white;
  width: 30%;
  font-weight: 600;
  text-align: center;
  border-radius: 5px;

  @media (max-width: 800px) {
    /* border: solid purple; */
    width: 100%;
  }
`;
