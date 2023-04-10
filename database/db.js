const { Sequelize } = require('sequelize');

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost', //direccion donde se encuentra la base de datos
    username: 'postgres', //usuario por defecto postgre
    password: '0600benja', //contraseña que se digita en postgre
    database: 'AppTaller', //nombre de la base de datos
    logging: false
})


module.exports = { db };