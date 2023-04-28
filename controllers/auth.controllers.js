const User = require('../models/users.models');

exports.signup = async (req, res, next) => {

    const { name, email, password } = req.body;

    const user = await User.create({ name, email, password });

    res.status(201).json({
      status: 'success',
      message: 'The user has ben created successfuly!',
    });

};
