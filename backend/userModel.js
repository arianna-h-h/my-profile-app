const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  description: String,
  image: String
}, { timestamps: true });

export default mongoose.model('User', UsersSchema);
