const { Sector, User } = require('./models');

const getSectors = async (req, res) => {
  const sectors = await Sector.find().select(
    'name value hasParent parent -_id'
  );

  res.json(sectors);
};

const saveUser = async (req, res) => {
  const user = await User.create(req.body);
  res.json({ status: 201, user });
};
const editUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.body.sessionId, req.body, {
    new: true,
  });
  res.json({ status: 200, user });
};

module.exports = { getSectors, saveUser, editUser };
