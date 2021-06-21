const express = require("express");
let router = express.Router();
var bcrypt = require("bcryptjs");
const _ = require("lodash");
let { User } = require("../../models/user");
router.post("/register", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User with given email already exists");
  user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;
  let salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();
  return res.send(_.pick(user, ["name", "email"]));
});

router.post("/login", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("User not registered");
  let isValid = await bcrypt.compare(req.body.password, user.password);
  if (!isValid) return res.status(401).send("invalid password");
  res.send("Logged in successfully");
});

module.exports = router;
