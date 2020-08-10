
const { Model, DataTypes} = require("sequelize");
const Aluno = require("./alunos");

class Postagem extends Model{
    static init (sequelize) {
        super.init({   
            titulo: DataTypes.STRING,
            descricao: DataTypes.TEXT,
            imagem: DataTypes.STRING,
            gists: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: "postagens",
        }
        );
    }
    static associate(models){
        this.belongsTo(models.Aluno, { foreignKey: "created_aluno_id"});
    }
}

module.exports = Postagem;