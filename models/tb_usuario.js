'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_usuario.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    telefone: DataTypes.STRING,
    senha: DataTypes.STRING,
    status: DataTypes.STRING,
    cpf: DataTypes.STRING,
    cep: DataTypes.STRING,
    id_categoria: DataTypes.INTEGER,
    nivel: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tb_usuario',
  });
  return tb_usuario;
};