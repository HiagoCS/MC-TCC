'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_recibo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_recibo.init({
    id_cliente: DataTypes.INTEGER,
    id_produto: DataTypes.INTEGER,
    nm_produto: DataTypes.STRING,
    vl_produto: DataTypes.FLOAT,
    qt_produto: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tb_recibo',
  });
  return tb_recibo;
};