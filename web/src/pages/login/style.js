import styled, {keyframes} from "styled-components";

export const Container = styled.div`
    width: 100vw;
    max-width: 1220px;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const ImageCropped = styled.div`
    width: 100vh;
    max-width: 580px;
    min-width: 100px;
    height: 90%;
    min-height: 400px;
    max-height: 700px;

    overflow: hidden;

    border 1px solid var(--white);
    border-right: 0px;

    > img {
        width: 800px;
        margin-left: -110px;
    }
`

const fadeForm = keyframes`
    from{
        opacity: 0;
    };
    to{
        opacity: 1;
    },
`;

export const Form = styled.form`
    width: 100%;
    max-width: 400px;
    height: 90%;
    min-height: 400px;
    border-radius: 0px 10px 10px 0px;

    border solid 1px var(--white);
    border-left: 0px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: ${fadeForm} 1.5s;
`

export const Titulo = styled.h1`
    color: var(--red);
    font-size: 40px;
    letter-spacing: 5px;
    text-shadow: 0px 0px 3px var(--white), 0px 0px 5px var(--white);
    cursor: default;
    transition: 0.8s;

    :hover {
        color: var(--primary);
    }
`;

export const SubTitulo = styled(Titulo)`
    margin-bottom: 20px;
    font-size: 20px;
    color: var(--white);
    text-shadow: none;

    :hover {
        color: var(--red);
    }
`;

export const InputGroup = styled.div`
    width: 100%;
    margin-top: 10px;

    display: flex;
    align-items: center;

    > label {
        margin: 0px 10px;
        min-width: 65px;
    }

    > input {
        flex: 1;
        margin-right: 10px;
    }
`;

export const Button = styled.button`
    min-width: 200px;
    margin: 10px 10px 0px 0px;

    align-self: flex-end;
`;