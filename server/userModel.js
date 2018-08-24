const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  description: String,
  image: String
}, { timestamps: true });

const model = mongoose.model('User', UserSchema);
module.exports = model;
