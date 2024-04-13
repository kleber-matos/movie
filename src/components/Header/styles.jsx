/** @format */

import styled from "styled-components";

export const Header = styled.div`
  border-bottom: solid rgb(8, 8, 8);
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 30%;

  li {
    list-style: none;
    display: flex;
    align-items: center;
  }

  a {
    color: #c4c4c4;
    font-size: clamp(1.3rem, 2vw, 5rem);
    font-weight: 600;
    display: flex;
    align-items: center;
  }

  a:hover {
    color: #858585;
  }
  @media (max-width: 750px) {
    width: 80%;
    justify-content: space-evenly;
  }
`;

export const Lupa = styled.form`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 30%;
  height: 40%;
  color: #c4c4c4;
  cursor: pointer;

  input {
    margin-right: 5px;
    width: 50%;
    height: 100%;
    padding-left: 1rem;
    font-weight: 600;
    font-size: 16px;
    outline: none;
    color: white;
    border-radius: 5px;
    border: solid 2px #c4c4c4;
    background-color: transparent;
  }

  @media (max-width: 750px) {
    display: none;
  }
`;
