const Repair = require('../models/repairs.models');

exports.findAllRepairs = async (req, res) => {
  try {
    const repairs = await Repair.findAll({
      attributes: ['id', 'date', 'userId'],
      where: {
        status: 'pending',
      },
    });

    return res.status(200).json({
      status: 'success',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: 'Somethin went very wront😒!',
    });
  }
};

exports.findOneRepair = async (req, res) => {
  try {
    const { repair } = req;

    return res.status(200).json({
      status: 'success',
      message: 'Repair Found😎',
      repair,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: 'Somethin went very wront😒!',
    });
  }
};

exports.createRepair = async (req, res) => {
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
};

exports.updateRepair = async (req, res) => {
  try {
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
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: 'Somethin went very wront!😒',
    });
  }
};

exports.deleteRepair = async (req, res) => {
  try {
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
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: 'An error has occurred, talk to the administrator',
    });
  }
};
