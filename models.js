const mongoose = require('mongoose');

const SectorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  value: {
    type: String,
    required: true,
  },

  parent: {
    type: String,
  },

  hasParent: {
    type: Boolean,
    required: true,
  },
});

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  selectedSector: {
    type: String,
    required: true,
  },

  acceptTerms: {
    type: Boolean,
    required: true,
  },
});
const User = mongoose.model('User', UserSchema);
const Sector = mongoose.model('Sector', SectorSchema);

module.exports = { Sector, User };
