const express = require('express');
const usersControllers = require('./../controllers/users.controllers');


const router = express.Router();

router
.route('/')
.get(usersControllers.findAllUsers)
.post(usersControllers.createUser);


router
.route('/:id')
.get(usersControllers.findOneUser)
.patch(usersControllers.updateUser)
.delete(usersControllers.deleteUser);

module.exports = router;



