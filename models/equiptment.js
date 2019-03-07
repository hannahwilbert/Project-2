'use strict';

module.exports = function(sequelize, DataTypes) {
  var Equiptment = sequelize.define("Equiptment", {
    // Giving the Author model a name of type STRING
    equiptment_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    packed: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  },
  {
    timestamps: false
  
  });
  return Equiptment;
};