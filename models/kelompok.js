'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kelompok extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Kelompok.init({
    nama_kelompok: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Kelompok',
  });
  return Kelompok;
};