const express = require('express');
const repairsControllers = require('./../controllers/repairs.controllers');

const router = express.Router();

router
.route('/')
.get(repairsControllers.findAllRepairs)
.post(repairsControllers.createRepair);


router
.route('/:id')
.get(repairsControllers.findOneRepair)
.patch(repairsControllers.updateRepair)
.delete(repairsControllers.deleteRepair);

module.exports = router;