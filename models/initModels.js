const Repair = require('./repairs.models');
const User = require('./users.models');

const initModel = () => {
  User.hasMany(Repair);
  Repair.belongsTo(User);
};
module.exports = initModel;
