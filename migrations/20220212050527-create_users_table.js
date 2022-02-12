'use strict';

module.exports = {
  up: async(queryInterface, Sequelize)=> {
    /**
     * Add altering commands here.
     */

    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        AutoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      createdAt:Sequelize.DATE,
      updatedAt:Sequelize.DATE,
    });

  },

  down: async(queryInterface, Sequelize)=> {
    /**
     * Add reverting commands here.
     *
    */
     await queryInterface.dropTable('users');
     
  }
};
