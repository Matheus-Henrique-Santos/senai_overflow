import React from "react";
import {Container, ImageCropped, Form, Titulo, SubTitulo, InputGroup} from "./styles";
import foto from "../../assets/foto.jpg"


const Login = () => {
  return (
    <>
        <Container>
            <ImageCropped>
                <img src={foto} alt="Imagem de capa" />
            </ImageCropped>
            <Form>
                <Titulo>Senai OverFlow</Titulo>
                <SubTitulo>
                    Compartilhe suas duvidas
                </SubTitulo>
                <InputGroup>
                    <label>E-mail</label>
                    <input type="email" placeholder="insira seu e-mail" />
                </InputGroup>
                <InputGroup>
                    <label>Senha</label>
                    <input type="password" placeholder="insira sua senha" />
                </InputGroup>
            </Form>
        </Container>
    </>
  )
}

export default Login;