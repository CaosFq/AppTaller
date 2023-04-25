const User = require('../models/users.models');
const AppError = require('../utils/appError');
const catchAsync = require('./../utils/catchAsync');


exports.validIfExistUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findOne({
    attributes: ['id', 'name', 'email'],
    where: {
      id,
      status: 'available',
    },
  });
 // throw new Error('para probar, genero un error!🤦‍♂️');
  if (!user) {
    return next(new AppError('User not found 🤷‍♂️', 404));
  }
  req.user = user;
  next();
});
