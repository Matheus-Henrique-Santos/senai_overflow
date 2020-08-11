//configura a aplicação

const express = require('express');
require("./database");
const rotas = require('./routes');


//iniciando a aplicação
const app = express();


//nas requisições pode ter corpos no formato json
app.use(express.json());

//cadastrando as rotas
app.use(rotas);

module.exports = app;