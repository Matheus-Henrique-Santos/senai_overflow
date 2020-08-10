//esse arquivo tem como responsabilidade cadastrar as rotas da aplicação

const express = require("express");
const { route } = require("./app");

//criando meu routerizador
const routes = express.Router();

const alunoController = require("./controllers/aluno");
const postagem = require("./controllers/postagem");


//encaminhar a requisição
routes.post("/alunos", alunoController.store);
routes.get("/alunos/:id", alunoController.buscarPorId);
routes.get("/alunos", alunoController.listar);

routes.post("/postagens", postagemController.store);

module.exports = routes;
