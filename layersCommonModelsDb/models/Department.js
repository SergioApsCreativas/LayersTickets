const { DataTypes } = require('sequelize');
const {db} = require('../connection');

const Department = db.define('Department', {
    name: DataTypes.STRING
}, {
    timestamps: false,
    tableName: 'departamento'
});

module.exports.Department = Department;