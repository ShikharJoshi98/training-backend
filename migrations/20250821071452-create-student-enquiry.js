'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StudentEnquiries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      contact: {
        type: Sequelize.STRING
      },
      enquiryAbout: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      isContacted: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
      },
      instituteId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Institutes',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('StudentEnquiries');
  }
};