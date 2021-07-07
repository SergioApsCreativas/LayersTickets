const { DataTypes } = require('sequelize');
const {db} = require('../connection');

const VUserComplete = db.define('VUserComplete', {
    fullname: DataTypes.STRING,
    password: DataTypes.STRING,
    rolid: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    email: DataTypes.STRING,
    departmentid: DataTypes.NUMBER,
    roles_name: DataTypes.STRING,
    department_name: DataTypes.STRING
}, {
    timestamps: false,
    tableName: 'v_user_complete'
});

module.exports.VUserComplete = VUserComplete;