import styled from "styled-components";

export const Container = styled.div`
  background-color: #181818;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Details = styled.div`
  height: 75%;
  width: 30%;
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
