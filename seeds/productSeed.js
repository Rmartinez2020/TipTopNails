/* === Dependencies === */
const mongoose = require("mongoose");
const Product = require("../models/product");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/TipTopNails"
);

const productSeed = [
  {
    name: "Manicure",
    price: "16",
    category: "Manicure Pedicure"
  },
  {
    name: "Manicure/Pedicure",
    price: "40",
    category: "Manicure Pedicure"
  },
  {
    name: "Gel Color Change",
    price: "20",
    category: "Manicure Pedicure"
  },
  {
    name: "Gel Manicure",
    price: "27",
    category: "Manicure Pedicure"
  },
  {
    name: "Pedicure",
    price: "26",
    category: "Manicure Pedicure"
  },
  {
    name: "Deluxe Pedicure",
    price: "32",
    category: "Manicure Pedicure"
  },
  {
    name: "Gel Pedicure",
    price: "46",
    category: "Manicure Pedicure"
  },
  {
    name: "Super Pedicure",
    price: "47",
    category: "Manicure Pedicure"
  },
  {
    name: "Acrylic Full Set",
    price: "27 & up",
    category: "Nail Care"
  },
  {
    name: "Acrylic Fill",
    price: "20 & up",
    category: "Nail Care"
  },
  {
    name: "Pink & White Full Set",
    price: "50 & up",
    category: "Nail Care"
  },
  {
    name: "Pink & White Fill",
    price: "40",
    category: "Nail Care"
  },
  {
    name: "Pink Fill",
    price: "27",
    category: "Nail Care"
  },
  {
    name: "White Tip Full Set",
    price: "35",
    category: "Nail Care"
  },
  {
    name: "UV Gel Full Set",
    price: "55 & up",
    category: "Nail Care"
  },
  {
    name: "UV Gel Fill",
    price: "37 & up",
    category: "Nail Care"
  },
  {
    name: "Full Set",
    price: "37 & up",
    category: "Healthy Nails"
  },
  {
    name: "Pink & White Full Set",
    price: "50 & up",
    category: "Healthy Nails"
  },
  {
    name: "Pink & White Fill",
    price: "40",
    category: "Healthy Nails"
  },
  {
    name: "Pink Fill",
    price: "30",
    category: "Healthy Nails"
  },
  {
    name: "Eyebrow",
    price: "10",
    category: "Waxing"
  },
  {
    name: "Lips",
    price: "6",
    category: "Waxing"
  },
  {
    name: "Chin",
    price: "7",
    category: "Waxing"
  },
];


Product
  .remove({})
  .then(() => Product.collection.insertMany(productSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
