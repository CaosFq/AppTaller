const User = require('../models/users.models');

exports.findAllUsers = async (req, res) => {
  try {
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
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: 'An error has occurred, talk to the administrator',
    });
  }
};

exports.findOneUser = async (req, res) => {
  try {
    const { user } = req;
    return res.status(200).json({
      status: 'success',
      message: 'User Found😎',
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: 'An error has occurred, talk to the administrator',
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const { user } = req;

    await user.update({ name, email });

    return res.status(200).json({
      status: 'available',
      message: 'The user has been update😁',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: 'An error has occurred, talk to the administrator',
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { user } = req;
    await user.findOne({ status: 'disabled' });
    return res.status(200).json({
      status: 'success',
      message: 'The user has been deleted',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: 'An error has occurred, talk to the administrator😒',
      error,
    });
  }
};
