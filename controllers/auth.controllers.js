const User = require('../models/users.models');
const catchAsync = require('./../utils/catchAsync');
const bcrypt = require('bcryptjs');
const generateJWT = require('../utils/jwt');

exports.signup = catchAsync(async (req, res, next) => {
  const { name, email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const encryptedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: encryptedPassword,
  });
  const token = await generateJWT(user.id);
  res.status(201).json({
    status: 'success',
    message: 'The user has ben created successfuly!',
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  });
});
