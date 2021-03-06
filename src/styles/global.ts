import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }    

    html, body, #root{
        height: 100%
    }

    *, button, input{
        border: 0;
        outline: 0;
        font-family: "Roboto";
        font-weight: 500;
    }

    button{
        cursor: pointer;
    }

`;

