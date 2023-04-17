//librerias
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const usersRoutes = require('./routes/users.routes');
const repairsRoutes = require('./routes/repairs.routes');

const app = express();
//1-Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  req.requestTime = new Date();
  next();
});

//2-Crearnos una ruta de mi servidor

app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/repairs', repairsRoutes);

//3-Exports app                
module.exports = app;
