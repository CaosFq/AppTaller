const express = require('express');

//Controllers
const usersControllers = require('./../controllers/users.controllers');

//Middlewares
const usersMiddlewares = require('./../middlewares/users.middlewares');
const validationsMiddlewares = require('./../middlewares/validations.middlewares');
const authMiddlewares = require('./../middlewares/auth.middlewares');

//Valido name, email, password, role
const validUsers = (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name) {
    return res.status(400).json({
      status: 'error',
      message: 'the name is requerid',
    });
  }
  if (!email) {
    return res.status(400).json({
      status: 'error',
      message: 'the email is requerid',
    });
  }
  if (!password) {
    return res.status(400).json({
      status: 'error',
      message: 'the password is requerid',
    });
  }
  if (!role) {
    return res.status(400).json({
      status: 'error',
      message: 'the role is requerid',
    });
  }
  next();
};

const router = express.Router();

router.route('/').get(authMiddlewares.protect, usersControllers.findAllUsers);

router
  .route('/:id')
  .get(usersMiddlewares.validIfExistUser, usersControllers.findOneUser)
  .patch(usersMiddlewares.validIfExistUser, validationsMiddlewares.updateUserValidation, usersControllers.updateUser)
  .delete(usersMiddlewares.validIfExistUser,usersControllers.deleteUser);

module.exports = router;
