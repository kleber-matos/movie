/** @format */
import React from "react";
import load from "../../assets/loading.gif";
import styled from "styled-components";

export default function Loading() {
  const Load = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    border: solid red;
    img {
      width: 20%;
      height: 30%;
    }
  `;

  return (
    <Load>
      <img src={load} alt="Carregando..." />
    </Load>
  );
}
