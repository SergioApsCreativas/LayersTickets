const { DataTypes } = require('sequelize');
const {db} = require('../connection');

const departamentos = db.define('departamentos', {
    name: DataTypes.STRING,
    id: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
}, {
    tableName: 'departamento'
});

module.exports.departamentos = departamentos ;