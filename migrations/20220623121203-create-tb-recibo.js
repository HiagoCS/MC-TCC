'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_recibos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_cliente: {
        type: Sequelize.INTEGER,
        references:{
          model:'tb_usuarios',
          key:'id'
        }
      },
      id_produto: {
        type: Sequelize.INTEGER,
        references:{
          model:'tb_anuncio',
          key:'id'
        }
      },
      nm_produto: {
        type: Sequelize.STRING,
        references:{
          model:'tb_anuncio',
          key:'nome'
        }
      },
      vl_produto: {
        type: Sequelize.FLOAT,
        references:{
          model:'tb_anuncio',
          key:'custo'
        }
      },
      qt_produto: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_recibos');
  }
};