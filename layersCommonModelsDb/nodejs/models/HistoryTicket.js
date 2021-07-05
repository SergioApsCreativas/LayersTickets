const { DataTypes, Sequelize } = require('sequelize');
const {db} = require('../connection');

const HistoryTicket = db.define('HistoryTicket', {
    message: DataTypes.STRING,
    ticketid: DataTypes.NUMBER,
    date_creation: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
    title: DataTypes.STRING,
    senderid: DataTypes.NUMBER,
    img: DataTypes.TEXT
}, {
    timestamps: false,
    tableName: 'ticket_history'
});

module.exports.HistoryTicket = HistoryTicket;