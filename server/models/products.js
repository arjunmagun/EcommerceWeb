const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    imageUrl: String,
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
});

const Products = mongoose.model("Products", productSchema);
module.exports = Products;