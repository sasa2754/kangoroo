const Sequelize = require('sequelize')
const database = require('../config/db');
const user = require('./user')
const post = require('./post')
// const { type } = require('os');

const comment = database.define('comment',
    {
        idComment: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

        description: {
            type: Sequelize.STRING(100),
            allowNull: true
        },
        commentDate: {
            type: Sequelize.DATE,
            allowNull: false
        }
    });

comment.belongsTo(post, {
    constraint: true, //Garantir integridade referencial
    foreignKey: 'idPost'
});
comment.belongsTo(user, {
    constraint: true, //Garantir integridade referencial
    foreignKey: 'idUser'
});

module.exports = comment;