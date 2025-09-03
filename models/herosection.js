'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HeroSection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HeroSection.init({
    tagline: DataTypes.STRING,
    heading: DataTypes.STRING,
    subHeading: DataTypes.STRING,
    description: DataTypes.STRING,
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
    modelName: 'HeroSection',
  });
  return HeroSection;
};