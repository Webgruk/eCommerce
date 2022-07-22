const mongoose = require("mongoose");

const schema = mongoose.Schema;

const productSchema = new schema({
  name: {
    type: "string",
    required: true,
  },
  description: {
    type: "string",
    required: true,
  },
  price: {
    type: "number",
    required: true,
  },
  countInStock: {
    type: "number",
    required: true,
  },
  imageUrl: {
    type: "string",
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
