/** @format */

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;

body{
    background-color: #181818;
    color: white;
}

a{
    text-decoration: none;
}

@media screen and (max-width: 768px) {
    font-size: 14px; 
}

@media screen and (min-width: 769px) {
    font-size: 18px; 
}}
`;
