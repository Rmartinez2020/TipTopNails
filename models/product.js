/* === Dependencies === */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


/* === Define Schema === */
const Product = new Schema({
    name: String,
    price: Number,
    category: String
});

module.exports =  mongoose.model("products", Product);