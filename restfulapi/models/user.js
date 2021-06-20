var mongoose = require("mongoose");
const joi = require("@hapi/joi");
var userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

var User = mongoose.model("User", userSchema);

function validateUser(data) {
  const schema = joi.object({
    name: joi.string().min(3).max(20).required(),
    email: joi.string().email().min(8).required(),
    password: joi.string().min(8).required(),
  });
  return schema.validate(data, { abortEarly: false });
}

function validateUserLogin(data) {
  const schema = joi.object({
    email: joi.string().email().min(8).required(),
    password: joi.string().min(8).required(),
  });
  return schema.validate(data, { abortEarly: false });
}

module.exports.User = User;
module.exports.validate = validateUser; //for signup
module.exports.validateUserLogin = validateUserLogin; //for login
