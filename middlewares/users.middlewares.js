const User = require('../models/users.models');

exports.validIfExistUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      attributes: ['id', 'name', 'email'],
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
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: 'An error has occurred, talk to the administrator',
    });
  }
};
