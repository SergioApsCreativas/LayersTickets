const { DataTypes } = require('sequelize');
const {db} = require('../connection');

const Ticket = db.define('Ticket', {
    departmentid: DataTypes.NUMBER,
    issue: DataTypes.STRING,
    status: DataTypes.ENUM('ATENDIDO', 'NO_ATENDIDO', 'EN_PROGRESO', 'FINALIZADO', 'CERRADO'),
    urgence: DataTypes.ENUM('NORMAL', 'URGENTE', 'MEDIO'),
    time_response: DataTypes.DATE,
    img: DataTypes.STRING(300),
    description: DataTypes.TEXT,
    clientid: DataTypes.NUMBER,
    userattendedid: DataTypes.NUMBER,
    useractiveid: DataTypes.NUMBER
}, {
    tableName: 'ticket'
});

module.exports.Ticket = Ticket;