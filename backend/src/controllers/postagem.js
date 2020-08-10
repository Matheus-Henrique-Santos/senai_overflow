const Postagem = require("../models/Postagem");
const { sequelize, associate, hasMany } = require("../models/Postagem");

module.exports = {
    async StorageEvent(req, res){
        const token = req.headers.athorization;
        const[bearer, created_aluno_id] = token.split("");

        const { titulo, descricao, imagem, gists} = req.body;

        let post = await Postagem.create({
            titulo,
            descricao,
            imagem,
            gists,
            created_aluno_id,
        });    
        res.status(201).send(Postagem);
        
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

        res.status(204).send;
    },
}