/** @format */

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #181818;
  color: white;
  height: 70vh;
`;

export const Details = styled.div`
  height: 75%;
  width: 40%;
  div {
    display: flex;
    align-items: center;
  }
`;

export const Trailer = styled.a`
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 5px;
`;

export const Center = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
`;
