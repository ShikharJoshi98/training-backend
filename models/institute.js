'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Institute extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Institute.init({
    username: { type: DataTypes.STRING, allowNull: false },
    instituteName: { type: DataTypes.STRING, allowNull: false },
    role: {
      type: DataTypes.STRING,
      defaultValue:'user'
    },
    logo: {type: DataTypes.TEXT('long')},
    abbv: {type:DataTypes.STRING},
    password: {type:DataTypes.STRING,allowNull:false},
    email: {type:DataTypes.STRING},
    phone: {type:DataTypes.STRING},
    altPhone: DataTypes.STRING,
    address: { type: DataTypes.STRING},
  }, {
    sequelize,
    modelName: 'Institute',
  });
  return Institute;
};