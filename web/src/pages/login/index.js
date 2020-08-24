import React, { useState } from "react";
import { api } from "../../services/api";

import { Container, ImageCropped, Form, Titulo, SubTitulo, InputGroup, Button } from "./style";
import foto from "../../assets/foto.jpg";
import Alerts from "../../components/Alerts"
import { useHistory } from "react-router-dom";
import { signIn } from "../../services/security";

const FormRegistrar = (props) => {
    
    const [alunoRegistrar, setAlunoRegistrar] = useState({
        nome: "",
        senha: "",
        email: "",
        ra: "",
    });

    const handlerInput = (e) => {
        setAlunoRegistrar({...alunoRegistrar, [e.target.id]: e.target.value});
    };

    const registrar = async (e) => {
        e.preventDefault();

        try {
            const retorno = await api.post("/alunos", alunoRegistrar);

            if(retorno.status === 201) {
                //logar na aplicação
                //redirecionar para tela home

                window.alert("Registrado com sucesso!");
            }
        } catch (erro) {
            console.log(erro);
            window.alert(erro.response.data.erro);
        }
    };
    
    return(
        <Form onSubmit={registrar}>
            <Titulo>SENAI OVERFLOW</Titulo>
            <SubTitulo>Compartilhe suas dúvidas</SubTitulo>
            <InputGroup>
                <label>Nome</label>
                <input type="text" id="nome" value={alunoRegistrar.nome} onChange={handlerInput} placeholder="Insira seu nome" required />
            </InputGroup>
            <InputGroup>
                <label>Email</label>
                <input type="email" id="email" value={alunoRegistrar.email} onChange={handlerInput} placeholder="Insira seu email" required />
            </InputGroup>
            <InputGroup>
                <label>Senha</label>
                <input type="password" id="senha" value={alunoRegistrar.senha} onChange={handlerInput} placeholder="Insira sua senha" required />
            </InputGroup>
            <InputGroup>
                <label>RA</label>
                <input type="text" id="ra" value={alunoRegistrar.ra} onChange={handlerInput} placeholder="Insira seu RA" required />
            </InputGroup>
            <Button type="submit">Registrar-se</Button>
            <Button type="button" onClick={() => {
                props.mostrarForm("login");
            }}>Já tenho cadastro</Button>
         </Form>
    );
};


const FormLogin = (props) => {
    
    const history = useHistory();

    const [alunoLogin, setAlunoLogin] = useState({
        email: "",
        senha: "",
    });

    const handlerInput = (e) => {
        setAlunoLogin({...alunoLogin, [e.target.id]: e.target.value});
    };

    const entrar = async (e) => {
        e.preventDefault();

        try {
            const retorno = await api.post("/sessao", alunoLogin);

            if(retorno.status === 201) {
                //logar na aplicação
                signIn(retorno.data);
                //redirecionar para tela home
                return history.push("/home");
            }
        } catch (erro) {
            console.log(erro);
            window.alert(erro.response.data.erro);
        }
    };
    
    return(
        <Form onSubmit={entrar}>
            <Titulo>SENAI OVERFLOW</Titulo>
            <SubTitulo>Compartilhe suas dúvidas</SubTitulo>
            <InputGroup>
                <label>E-mail</label>
                <input type="email" id="email" value={alunoLogin.email} onChange={handlerInput} placeholder="Insira seu email" required />
            </InputGroup>
            <InputGroup>
                <label>Senha</label>
                <input type="password" id="senha" value={alunoLogin.senha} onChange={handlerInput} placeholder="Insira sua senha" required />
            </InputGroup>
            <Button type="submit">Entrar</Button>
            <Button type="button" onClick={() => {
                props.mostrarForm("registrar");
            }}>Registrar-se</Button>
         </Form>
    );
};

const Login = () => {
    
    const [mostrarForm, setMostrarForm] = useState("login");
    
    return (
        <>
            <Container>
                <ImageCropped>
                    <img src={foto} alt="Imagem de capa" />
                </ImageCropped>
                {mostrarForm === "login" ? (<FormLogin mostrarForm={setMostrarForm} />) : (<FormRegistrar mostrarForm={setMostrarForm}/>)};
            </Container>
        </>
    )
}

export default Login;