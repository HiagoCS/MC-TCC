'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_anuncio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_anuncio.init({
    id_vendedor: DataTypes.INTEGER,
    id_categoria: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    custo: DataTypes.FLOAT,
    num_vendas: DataTypes.INTEGER,
    tempo_servico: DataTypes.TIME,
    media_avalicao: DataTypes.FLOAT,
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tb_anuncio',
  });
  return tb_anuncio;
};