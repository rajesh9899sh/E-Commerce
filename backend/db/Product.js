const mongoose = require("mongoose");
const productSchema = {
  name: String,
  price: String,
  category: String,
  userId: String,
  company: String,
};
const Product = mongoose.model("products", productSchema);
module.exports = Product;
