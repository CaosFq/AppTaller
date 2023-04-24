//librerias
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const usersRoutes = require('./routes/users.routes');
const repairsRoutes = require('./routes/repairs.routes');
const authRouter = require('./routes/auth.routes');

const app = express();
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  req.requestTime = new Date();
  next();
});

//2-Rutas

app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/repairs', repairsRoutes);
app.use('/api/v1/auth/', authRouter);

//3-Exports app
module.exports = app;
