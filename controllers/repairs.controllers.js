const Repair = require('../models/repairs.models');
const catchAsync = require('../utils/catchAsync');

exports.findAllRepairs =catchAsync(async (req, res) => {
  
    const repairs = await Repair.findAll({
      attributes: ['id', 'date', 'userId'],
      where: {
        status: 'pending',
      },
    });

    return res.status(200).json({
      status: 'success',
    });

});

exports.findOneRepair =catchAsync(async (req, res) => {

    const { repair } = req;

    return res.status(200).json({
      status: 'success',
      message: 'Repair Found😎',
      repair,
    });

});

exports.createRepair = catchAsync(async (req, res) => {
  //name, email, password, role
  try {
    const { date, userId } = req.body;
    const user = await Repair.create({ date, userId });

    return res.status(201).json({
      status: 'success',
      message: 'Repair created successfully😎',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: 'Somethin went very wront!😒',
    });
  }
});

exports.updateRepair = catchAsync(async (req, res) => {
 
    const { id } = req.params;

    const repair = await Repair.findOne({
      where: {
        id,
        status: 'completed',
      },
    });
    if (!repair) {
      return res.status(404).json({
        status: 'error',
        message: 'Repair not found😒',
      });
    }
    await repair.update({ status: 'completed' });
    return res.status(200).json({
      status: 'success',
      message: 'Repair updated successfuly😁',
    });

});

exports.deleteRepair =catchAsync(async (req, res) => {
  
    const { id } = req.params;
    const repair = await Repair.findOne({
      where: {
        id,
        status: 'pending',
      },
    });
    if (!repair) {
      return res.status(404).json({
        status: 'error',
        message: 'Repair not found😒',
      });
    }

    await repair.update({ status: 'cancelled' });
    res.status(200).json({
      status: 'success',
      message: 'Repair delete successfully😎',
    });

});
