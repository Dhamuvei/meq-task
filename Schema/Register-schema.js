const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  Username: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    index: { unique: true },
  },
  Number: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
    minlength: 6,
  },
  date: { type: Date, default: Date.now },
});
module.exports = mongoose.model("UserData", UserSchema);
