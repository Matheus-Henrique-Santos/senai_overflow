
const { Model, DataTypes} = require("sequelize");
const Aluno = require("./alunos");

class Postagem extends Model{
    static init (sequelize) {
        super.init({   
            titulo: DataTypes.STRING,
            descrição: DataTypes.STRING,
            imagem: DataTypes.STRING,
            gists: DataTypes.STRING,
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