const express = require('express');

//middlewares
const validations = require('./../middlewares/validations.middlewares');

//controllers
const authControllers = require('../controllers/auth.controllers');

const router = express.Router();

router.post('/signup', validations.createUserValidation, authControllers.signup);


module.exports = router;
