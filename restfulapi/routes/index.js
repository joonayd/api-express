var express = require("express");
var router = express.Router();

//main menu
router.get("/", function (req, res, next) {
  res.render("index");
});

//acotar
router.get("/acotar", function (req, res, next) {
  res.render("1stpage");
});
//acomaf
router.get("/acomaf", function (req, res, next) {
  res.render("2ndpage");
});
//acowar
router.get("/acowar", function (req, res, next) {
  res.render("3rdpage");
});
//acofas
router.get("/acofas", function (req, res, next) {
  res.render("4thpage");
});
//acosf
router.get("/acosf", function (req, res, next) {
  res.render("5thpage");
});
//rhysand
router.get("/rhysand", function (req, res, next) {
  res.render("6thpage");
});
//feyre
router.get("/feyre", function (req, res, next) {
  res.render("7thpage");
});
//cassian
router.get("/cassian", function (req, res, next) {
  res.render("8thpage");
});
//azriel
router.get("/azriel", function (req, res, next) {
  res.render("9thpage");
});
//nesta
router.get("/nesta", function (req, res, next) {
  res.render("10thpage");
});

//prythian
router.get("/prythian", function (req, res, next) {
  res.render("11thpage");
});
//velaris
router.get("/velaris", function (req, res, next) {
  res.render("12thpage");
});
//under the mountain
router.get("/mountain", function (req, res, next) {
  res.render("13thpage");
});
//hybern
router.get("/hybern", function (req, res, next) {
  res.render("14thpage");
});

module.exports = router;
