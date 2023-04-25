const User = require('../models/users.models');
const catchAsync = require('../utils/catchAsync');

exports.findAllUsers = catchAsync(async (req, res) => {
  const users = await User.findAll({
    attributes: ['id', 'name', 'email'],
    where: {
      status: 'available',
    },
  });
  if (!users) {
    return res.status(404).json({
      status: 'error',
      message: 'user not found',
    });
  }
  res.status(200).json({
    status: 'success',
    message: 'user Found',
    users,
  });
});

exports.findOneUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const user =await User.findOneUser
  return res.status(200).json({
    status: 'available',
    message: 'User Found😎',
    id,
  });
});

exports.updateUser = catchAsync(async (req, res) => {
  const { name, email } = req.body;
  const { user } = req;

  await user.update({ name, email });

  return res.status(200).json({
    status: 'success',
    message: 'The user has been update😁',
  });
});

exports.deleteUser = catchAsync(async (req, res) => {
  const { user } = req;
  await user.findOne({ status: 'disabled' });
  return res.status(200).json({
    status: 'success',
    message: 'The user has been deleted',
  });
});
