const Postagem = require("../models/Postagem");
const Aluno = require("../models/alunos");
const { sequelize, associate, hasMany } = require("../models/Postagem");


module.exports = {

    async index(req, res){

        const postagens = await Postagem.findAll({
            include: {
                association: "Aluno",
                attributes: ["id", "nome", "ra"]
            },

            order: [["created_at", "DESC"]],
        });

        res.send(postagens);

    },

    async store(req, res){
        const token = req.headers.authorization;
        const[bearer, created_aluno_id] = token.split(" ");

        const { titulo, descricao, imagem, gists} = req.body;

        // const aluno = await Aluno.findByPk(created_aluno_id);

        try {
            const aluno = await Aluno.findByPk(created_aluno_id);
            
            if(!aluno){
                res.send(404).send({erro: "Aluno não encontrado"});
            }

            let postagem = aluno.createPostagem({
            titulo,
            descricao,
            imagem,
            gists
        });    
        res.status(201).send(postagem);

    } catch (error) {
        return res.status(500)
        .send({
            erro:
             "nao foi possivel adicionar a postagem. tente nivamente mais tarde"})    
    }
        
    },  
    async delete(req, res) {
        const token = req.headers.authorization;
        const [bearer, created_aluno_id] = token.split("");

        const {id} = req.params;

        let postagem = await Postagem.findByPk(id);

        if(!postagem){
            return res.status(404).send({erro: "Postagem não encontrada"});

        }


        if (postagem.created_aluno_id != created_aluno_id){
            return res
                .status(401)
                .send({ erro: "voce nao tem permissão para excluir essa postagem"})

        }

        await postagem.destroy();

        res.status(201).send;
    },
}