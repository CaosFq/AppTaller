//1-Requerimos Express que es una libreria
const express = require('express');
const morgan = require('morgan');
const usersRoutes = require('./routes/users.routes');
const repairsRoutes = require('./routes/repairs.routes');

//2-Iniciamos la aplicación de expres en la variable app
const app = express();

app.use(express.json());

//3-Crearnos una ruta de mi servidor

app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/repairs', repairsRoutes);

module.exports = app;
