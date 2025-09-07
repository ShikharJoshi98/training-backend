'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class whoWeAreSection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  whoWeAreSection.init({
    aboutCards: DataTypes.JSON,
    aboutList: {
      type: DataTypes.TEXT,
      get() {
        const rawValue = this.getDataValue('aboutList');
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
            this.setDataValue('aboutList', '[]');
          } else {
            this.setDataValue('aboutList', `[${value.join(',')}]`);
          }
        } else if (typeof value === 'string') {
          this.setDataValue('aboutList', value);
        } else {
          this.setDataValue('aboutList', '[]');
        }
      }
    },
    image: DataTypes.TEXT('long'),
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
    modelName: 'whoWeAreSection',
  });
  return whoWeAreSection;
};