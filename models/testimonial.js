'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Testimonial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Testimonial.init({
    name: {type:DataTypes.STRING,allowNull: false},
    testimonial: { type: DataTypes.STRING, allowNull: false },
    tutorialImage: { type: DataTypes.TEXT('long')},
    newCompany: DataTypes.STRING,
    oldJobRole: DataTypes.STRING,
    newJobRole: DataTypes.STRING,
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
    modelName: 'Testimonial',
  });
  return Testimonial;
};