var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: String,
    age: String,
    bio: String,
  },
  { timestamps: true }
);

var User = mongoose.model('User', userSchema);

module.exports = User;
