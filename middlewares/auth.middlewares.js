const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');

exports.protect = catchAsync(async (req, res, next) => {
  //1_Extraer el token
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.starstWith('Bearer ')
  ) {
    token = req.headers.authorization.split('')[1];
  }
  //2_Validar si existe el token
  if (!token) {
    return next(
      new AppError('You are not logged in!, Please login to get access', 401)
    );
  }
  console.log(token);

  //3_Decodificar el jwt; transformar lo que aceptba callback en una promesa.

  const decoded = await promisify(jwt.verify)(
    token,
    process.env.SECRET_JWT_SEED
  );
  console.log(decoded);
});
