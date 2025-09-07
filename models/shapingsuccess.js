'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class shapingSuccess extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  shapingSuccess.init({
    shapingSuccessText: DataTypes.STRING,
    shapingSuccessArray: {
      type: DataTypes.TEXT,
      get() {
        const rawValue = this.getDataValue('shapingSuccessArray');
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
            this.setDataValue('shapingSuccessArray', '[]');
          } else {
            this.setDataValue('shapingSuccessArray', `[${value.join(',')}]`);
          }
        } else if (typeof value === 'string') {
          this.setDataValue('shapingSuccessArray', value);
        } else {
          this.setDataValue('shapingSuccessArray', '[]');
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
    }
  }, {
    sequelize,
    modelName: 'shapingSuccess',
  });
  return shapingSuccess;
};