'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UpcomingBatches extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
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