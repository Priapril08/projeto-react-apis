import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins",sans-serif;
    }
    @media (max-width: 768px) {
        body {
        font-size: 50%;

    }  
    
}
`;
