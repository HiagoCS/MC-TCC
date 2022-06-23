'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_avaliacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_avaliacao.init({
    id_cliente: DataTypes.INTEGER,
    id_produto: DataTypes.INTEGER,
    avaliacao: DataTypes.FLOAT,
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tb_avaliacao',
  });
  return tb_avaliacao;
};