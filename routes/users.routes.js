const express = require('express');
const usersControllers = require('./../controllers/users.controllers');

//Valido name, email, password, role
const validUsers = (req, res, next)=>{ 
    const{name, email, password, role }=req.body;
    if(!name){ 
        return res.status(400).json({
status: 'error',
message:'the name is requerid'
         });
    }
    if(!email){ 
        return res.status(400).json({
status: 'error',
message:'the email is requerid'
         });
    }
    if(!password){ 
        return res.status(400).json({
status: 'error',
message:'the password is requerid'
         });
    }
    if(!role){ 
        return res.status(400).json({
status: 'error',
message:'the role is requerid'
         });
    }
    next();  
};




const router = express.Router();

router
.route('/')
.get(usersControllers.findAllUsers)
.post(
    validUsers,
    usersControllers.createUser);


router
.route('/:id')
.get(usersControllers.findOneUser)
.patch(usersControllers.updateUser)
.delete(usersControllers.deleteUser);

module.exports = router;



