import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --primary: #111;
        --secondary: rgb(25,25,25);
        --white: #d9d9d9;
        --gray: #a7a7a7;
        --red: #aa0000;
    }

    *{
        margin: 0;
        padding: 0;
        outline: 0;
    }

    body{
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        background-color: var(--primary);
    }

    input {
        color: var(--white);
        background-color: var(---secundary);
        font-size: 16px;
        border: 1px solid var(--white);
        padding: 10px;
        font-weight: bold;
        height: 30px;
    }

    label{
        color: var(--white);
        letter-spacing: 2px;
        font-size: 20px;
    }

    input  {
        :hover {
            background-color: var(--red);
        }
    }
`