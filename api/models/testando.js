'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const Testando = sequelize.define('Testando', {
    nome: DataTypes.STRING,
    email: DataTypes.STRING
  }, {})
  
  return Testando;
};