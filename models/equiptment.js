'use strict';

module.exports = function (sequelize, DataTypes) {
    var Equiptment = sequelize.define("Equiptment", {
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