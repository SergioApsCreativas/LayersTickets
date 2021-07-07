const { DataTypes } = require('sequelize');
const {db} = require('../connection');

const User = db.define('User', {
    fullname: DataTypes.STRING,
    password: DataTypes.STRING,
    rolid: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    email: DataTypes.STRING,
    departmentid: DataTypes.NUMBER
}, {
    tableName: 'user'
});

module.exports.User = User;