const express = require("express");
const router = express.Router();

let cart = [];

router.get("/", (req, res) => {
  res.json(cart);
});

router.post("/", (req, res) => {
  const product = req.body;
  cart.push(product);
  res.json({ cart });
});

router.post("/checkout", (req, res) => {
  cart = [];
  res.json({ message: "Checkout successful!" });
});

module.exports = router;
