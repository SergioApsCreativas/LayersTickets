const { DataTypes } = require('sequelize');
const {db} = require('../connection');

const Role = db.define('Role', {
    name: DataTypes.STRING,
    type: DataTypes.STRING
}, {
    timestamps: false,
    tableName: 'roles'
});

module.exports.Role = Role;
