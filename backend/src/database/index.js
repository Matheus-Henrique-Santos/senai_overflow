const Sequelize = require("sequelize");
const dbConfig = require("../config/database.js");

const Aluno = require("../models/alunos.js");
const Postagem = require("../models/Postagem");


//criamos a conexão com os dados da configuração
const conexao = new Sequelize(dbConfig);

//inicializando os models
Postagem.init(conexao);
Aluno.init(conexao);

//
Aluno.associate(conexao.models);
Postagem.associate(conexao.models);

//exportamos a conexão
module.exports = conexao;

