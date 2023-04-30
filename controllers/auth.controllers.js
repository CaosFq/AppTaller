const User = require('../models/users.models');
const catchAsync = require('./../utils/catchAsync');
const bcrypt = require('bcryptjs');
const generateJWT = require('../utils/jwt');
const AppError = require('./../utils/appError');


exports.signup = catchAsync(async (req, res, next) => {
  const { name, email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const encryptedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name:name.toLowerCase(),
    email:email.toLowerCase(),
    password: encryptedPassword,
  });
  const token = await generateJWT(user.id);
  res.status(201).json({
    status: 'success',
    message: 'The user has ben created successfuly!',
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  });
});

exports.login = catchAsync(async(req, res, next)=>{ 
  const{email, password}= req.body;

  //Buscar el usuario y revisar si existe
  const user = await User.findOne({ 
    where:{
      email: email.toLowerCase(),
      status:'available',
     },
  });
  if(!user){ 
    return next(new AppError('The user could not be found', 404));
  }
  // Validar si la contraseña es correcta
  if(!(await bcrypt.compare(password, user.password))){ 
    return next(new AppError  ('Incorrect email or password', 401
    ));
  }
  const token = await generateJWT(user.id);

  res.status(200).json({ 
    status:'sucess',
    token,
    user:{ 
id:user.id,
name:user.name,
email: user.email,
    },
  });
});


