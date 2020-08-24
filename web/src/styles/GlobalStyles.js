import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --primary: #111;
        --secondary: rgb(25,25,25);
        --white: #D9D9D9;
        --gray: #7A7A7A;
        --red: #AA0000;
    }

    *{
        margin: 0;
        padding: 0;
        outline: 0;
    }

    body {
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        background-color: var(--primary);
    }

    input {
        color: var(--white);
        background-color: var(--secondary);
        font-size: 16px;
        border: 1px solid var(--white);
        padding: 10px;
        font-weight: bold;
        height: 30px;
        transition: background-color 0.2s;
    }

    label {
        color: var(--white);
        letter-spacing: 2px;

        font-size: 20px;
    }

    input, button {
        :hover{
            background-color: var(--red);
            transition: background-color 0.2s;
        }
    }

    button {
        padding: 10px;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-size: 18px;
        letter-spacing: 1px;

        color: var(--white);
        background-color: var(--primary);
        border: 1px solid var(--white);
        transition: background-color 0.2s;
        cursor: pointer;

        :active{
            color: var(--gray);
            border: 1px solid var(--gray);
        }
    }
`