//esse arquivo tem como responsabilidade cadastrar as rotas da aplicação

const express = require("express");
const { route } = require("./app");

//criando meu routerizador
const routes = express.Router();

const alunoController = require("./controllers/aluno");
const postagemController = require("./controllers/postagem");
const comentatirioController = require("./controllers/comentario");


//encaminhar a requisição
routes.post("/alunos", alunoController.store);
routes.get("/alunos/:id", alunoController.buscarPorId);
routes.get("/alunos", alunoController.listar);

routes.get("/postagens", postagemController.index);
routes.post("/postagens", postagemController.store);
routes.delete("/postagens/:id", postagemController.delete);


//rotas de comentarios
routes.post("/postagens/:postId/comentarios", comentatirioController.store)

module.exports = routes;
