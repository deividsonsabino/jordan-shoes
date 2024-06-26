import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root {
        --brand-color: #7CA2F4;
        --dark-10:#121214;
        --dark-20:#F3F7FF;
        --dark-30:#FFFFFF;
    }
    
    body {
        margin: 0;
        padding: 0;
        font-family: "Archivo", sans-serif;  
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
