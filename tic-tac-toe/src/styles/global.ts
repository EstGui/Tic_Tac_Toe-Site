import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    /* CSS VARIABLES */
    :root {
        --bg-color: #09090a;
        
        --hights: #f8f8f8;
        --hights-blue: #0974f1;
        --hights-red: #f10809;

        --shadow-1: 15px 0px 15px #0000005d;
        --shadow-blue: 0 0 20px #0975f1cc;
        --shadow-red: 0 0 20px #f10909cc;
        --shadow-white: 0 0 20px #ffffffcc;

        --border-blue: 2px solid #0974f1;
        --border-red: 2px solid #f10809;

        --line-width: 2px;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        user-select: none;          /* Padrão */
        -webkit-user-select: none;  /* Safari */
        -moz-user-select: none;     /* Firefox */
        -ms-user-select: none;      /* Internet Explorer/Edge */
    }

    body {
        background: var(--bg-color);
        font-family: 'Poppins';
        color: white;
    }
`