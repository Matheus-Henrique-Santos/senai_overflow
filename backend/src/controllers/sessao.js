const Aluno = require("../models/Aluno");
const bcrypt= require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
    async store(req, res){
        const { email, senha } = req.body;

        //verifica se o aluno existe e se a senha está correta
        // SELECT * FROM aluno WHERE email = ?, senha = ?
        const aluno = await Aluno.findOne({
            where : {
                email,
                
            },
        });

        //se não existir pu a senha estiver incorreta retorna erro
        // await ou compareSync
        if(!aluno || !await bcrypt.compare(senha, aluno.senha)){
            return res.status(403).send({erro: "Usuario e/ou senha invalidos"})
        }

        const token = jwt.sign({alunoId: aluno.id}, "SENAIOVERFLOW");

        //se existor e a senha estiver correta retorna ok com o token
        res.status(201).send({
            aluno:  {
            alunoId: aluno.id, 
            nome: aluno.nome,
            ra: aluno.ra,
            },
            token
        });
    },
};