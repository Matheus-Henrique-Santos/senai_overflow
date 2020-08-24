import React, { useState } from 'react';

const HelloWorld = () => {
  return(
    <div>Hello World, React JS</div>
  )
};

const BemVindo = (props) => {
  return(
  <div>Bem vindo, {props.usuario}</div>
  )
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handlerEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlerSenha = (e) => {
    setSenha(e.target.value);
  };

  const entrar = async () => {
    const retorno = await fetch("http://localhost:3333/sessao", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        senha
      })
    });

    console.log(await retorno.json);
  }
  
  return (
    <>
      <input type="text" value={email} onChange={handlerEmail} placeholder="Insira seu email"></input>
      <input type="password" value={senha} onChange={handlerSenha} placeholder="Insira sua senha"></input>
      <button onClick={entrar}>Teste</button>
      <p>{email}</p>
    </>
  )
}

function App() {
  return (
    <>
      <HelloWorld/>
      <BemVindo usuario="James"/>
      <Login/>
    </>
  );
}