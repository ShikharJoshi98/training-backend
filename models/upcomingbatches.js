'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UpcomingBatches extends Model {
   
  }

  UpcomingBatches.init({
    batch: DataTypes.STRING,
    startingDate: DataTypes.STRING,
    timing: DataTypes.STRING,
    type: DataTypes.STRING,
    classDays: DataTypes.STRING,
    instituteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Institutes',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }
  }, {
    sequelize,
    modelName: 'UpcomingBatches',
  });

  return UpcomingBatches;
};
