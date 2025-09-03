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
        if (!rawValue || rawValue === '[]') return [];

        const parsed = rawValue
          .replace(/^\[|\]$/g, '')
          .split(',')
          .map(str => str.trim())
          .filter(str => str !== ''); 

        return parsed;
      },
      set(value) {
        if (Array.isArray(value)) {
          if (value.length === 0) {
            this.setDataValue('subTopic', '[]');
          } else {
            this.setDataValue('subTopic', `[${value.join(',')}]`);
          }
        } else if (typeof value === 'string') {
          this.setDataValue('subTopic', value);
        } else {
          this.setDataValue('subTopic', '[]');
        }
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