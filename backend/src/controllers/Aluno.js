const Aluno = require("../models/alunos.js");
const {Op} = require("sequelize");
// const {delete} = require("../routes.js");


//realiza todas as interações q tem q ser feita com os alunos

module.exports = {
    // lista todos alunos
    async listar(req, res){

        const alunos = await Aluno.findAll();

        res.send(alunos);
    },

    //busca alunos por id
    async buscarPorId(req,res){
        const {id} = req.params;

        const aluno = await Aluno.findByPk(id, { raw:true});

        if(!aluno){
            res.status(404).send({erro: "aluno não encontrado"})
        }

        // aluno = aluno.getDataValue

        delete aluno.senha;

        res.send(aluno);
    },

    //metodo responsavel por fazer as inserções
    async store(req, res){
            const {ra, nome, email, senha} = req.body;

            let aluno = await Aluno.findOne({
                where: {
                    [Op.or]:[
                        {ra: ra},
                        {email: email}
                    ]
                }
            });

            if(aluno){
                return res.status(400).send({ erro: "aluno já cadastrado"})
            }

            aluno = await Aluno.create({ra, nome, email, senha});
            
            //cadastrar aluno no banco de dados
          
            res.status(201).send(aluno);  
    },

    update(){

    },

    delete(){

    },
}