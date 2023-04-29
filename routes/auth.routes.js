const express = require('express');

//middlewares
const validations = require('./../middlewares/validations.middlewares');

//controllers
const authControllers = require('../controllers/auth.controllers');

const router = express.Router();

router.post(
  '/signup',
  validations.createUserValidation,
  authControllers.signup
);
router.post('/login', validations.loginUserValidation, authControllers.login);

module.exports = router;
