const Sequelize = require("sequelize");
const dbConfig = require("../config/database.js");

const Aluno = require("../models/alunos.js");


//criamos a conexão com os dados da configuração
const conexao = new Sequelize(dbConfig);

Aluno.init(conexao);

//exportamos a conexão
module.exports = conexao;

