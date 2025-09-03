'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CourseCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CourseCategory.init({
    courseCategory: DataTypes.STRING,
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
    modelName: 'CourseCategory',
  });
  return CourseCategory;
};