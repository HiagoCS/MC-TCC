'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_categoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_categoria.init({
    nome: DataTypes.STRING,
    comissao: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'tb_categoria',
  });
  return tb_categoria;
};