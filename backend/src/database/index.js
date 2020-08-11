const Sequelize = require("sequelize");
const dbConfig = require("../config/database.js");

const Aluno = require("../models/alunos.js");
const Postagem = require("../models/Postagem");
const Comentario = require("../models/Comentario");


//criamos a conexão com os dados da configuração
const conexao = new Sequelize(dbConfig);

//inicializando os models
Postagem.init(conexao);
Aluno.init(conexao);
Comentario.init(conexao);

//
Aluno.associate(conexao.models);
Postagem.associate(conexao.models);
Comentario.associate(conexao.models);

//exportamos a conexão
module.exports = conexao;

