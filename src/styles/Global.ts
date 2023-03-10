import { createGlobalStyle } from "styled-components";
import { Global } from "../../interfaces/StylesInterface";
//Global styled components aka global styles
export const GlobalStyles = createGlobalStyle<Global>`

* {
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Titillium Web', sans-serif;
    
}
h1, h2, h3 {
    font-family: 'Playfair Display', serif;
}
html, body {
    width: 100%;
    height: 100%;
    
}

#__next {
    z-index: -9999;
    margin: 0 auto;
    width: 75vw;
    min-height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: ${(props) => props.rows};
    gap: 5px;
    background-color: ${(props) => props.theme.colors.background};
    overflow-y: hidden;
    @media all and (max-width: 800px) {
        width: 100%;
    }
}
`;
