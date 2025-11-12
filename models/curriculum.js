'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curriculum extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Curriculum.init({
    topic: DataTypes.STRING,
    subTopic: {
  type: DataTypes.TEXT,
  get() {
    const rawValue = this.getDataValue('subTopic');
    return rawValue ? JSON.parse(rawValue) : [];
  },
  set(value) {
    // Ensure we always store as a JSON string
    this.setDataValue('subTopic', JSON.stringify(value));
  }
},

    instituteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Institutes',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Courses',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }
  }, {
    sequelize,
    modelName: 'Curriculum',
  });
  return Curriculum;
};