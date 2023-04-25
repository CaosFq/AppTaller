const express = require('express');

//controllers
const repairsControllers = require('./../controllers/repairs.controllers');

//middlewares
const repairsMiddlewares = require('./../middlewares/repairs.middlewares');

const router = express.Router();

router
  .route('/')
  .get(repairsControllers.findAllRepairs)
  .post(repairsControllers.createRepair);

router
  .route('/:id')
  .get(repairsMiddlewares.ValidIfExistRepair, repairsControllers.findOneRepair)
  .patch(repairsMiddlewares.ValidIfExistRepair, repairsControllers.updateRepair)
  .delete(
    repairsMiddlewares.ValidIfExistRepair,
    repairsControllers.deleteRepair
  );

module.exports = router;
