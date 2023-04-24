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
6;
//2-Rutas

app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/repairs', repairsRoutes);
app.use('/api/v1/auth', authRouter);

//Centralizar errores
app.all('*', (req, res, next) => {
  const err = new Error(`Can't find ${req.originalUrl} on this server! 🤷‍♂️`);
  (err.status = 'error'), (err.statusCode = 404);

  next(err);
});

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'fail';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message ,
  });
});

//3-Exports app
module.exports = app;
