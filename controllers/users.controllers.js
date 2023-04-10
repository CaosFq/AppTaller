const User = require('../models/users.models');

exports.findAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      atributes: ['id', 'name', 'email'],
      where: {
        status: 'available',
      },
    });
    if (!users) {
      return res.status(404).json({
        status: 'errr',
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
    const { id } = req.params;
    const user = await User.findOne({
      atributes: ['id', 'name', 'email'],
      where: {
        id,
        status: 'available',
      },
    });
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found😒',
      });
    }

    return res.status(200)({
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

exports.createUser = async (req, res) => {
  //name, email password, role
  try {
    const { name, email, password, role } = req.body;
    const user = await User.create({ name, email, password, role });

    res.status(200).json({
      status: 'success',
      message: 'User created successfully😎',
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
    const { id } = req.params;

    const user = await User.findOne({
      atributes: ['id', 'name', 'email'],
      where: {
        id,
        status: 'available',
      },
    });
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found😒',
      });
    }
    await user.update({ name, email });
    return res.status(200).json({
      status: 'success',
      message: 'User updated successfuly',
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
    const { id } = req.params;
    const user = await User.findOne({
      atributes: ['id', 'name', 'email'],
      where: {
        id,
        status: 'available',
      },
    });
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found😒',
      });
    }

    await user.update({ status: 'disabled' });
    res.status(200).json({
      status: 'success',
      message: 'User delete successfully',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: 'An error has occurred, talk to the administrator',
    });
  }
};
