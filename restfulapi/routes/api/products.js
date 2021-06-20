const express = require("express");
let router = express.Router();
var { Product } = require("../../models/product");
const validateProduct = require("../../middlewares/validateProduct");
//get all products
router.get("/", async (req, res) => {
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);

  let products = await Product.find().skip(skipRecords).limit(perPage);

  return res.send(products);
});
//get single product
router.get("/:id", async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    if (!product) return res.status(400).send("product with given id isnt present"); //when id isnt present in db
    return res.send(product); //everything OK
  } catch (err) {
    return res.status(400).send("invalid ID"); //format of id isnt correct
  }
});
//update a record
router.put("/:id", validateProduct, async (req, res) => {
  let product = await Product.findById(req.params.id);
  product.name = req.body.name;
  product.price = req.body.price;
  await product.save();
  return res.send(product);
});

//delete
router.delete("/:id", async (req, res) => {
  let product = await Product.findByIdAndDelete(req.params.id);
  return res.send(product);
});

//insert a record
router.post("/", validateProduct, async (req, res) => {
  let product = new Product();
  product.name = req.body.name;
  product.price = req.body.price;
  await product.save();
  return res.send(product);
});
module.exports = router;
