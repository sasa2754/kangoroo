const Sequelize = require('sequelize')
const database = require('../config/db');
const user = require('./user')
// const { type } = require('os');

const post = database.define('post',
    {
        idPost: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

        description: {
            type: Sequelize.STRING(100),
            allowNull: true
        },
        img: {
            type: Sequelize.DATE,
            allowNull: true
        },
        hashtag: {
            type: Sequelize.STRING(60),
            allowNull: true
        },
        postDate: {
            type: Sequelize.DATE,
            allowNull: false
        }
    });

post.belongsTo(user, {
    constraint: true, //Garantir integridade referencial
    foreignKey: 'idUser'
});

module.exports = post;