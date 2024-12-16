const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true},
        make: { type: String, required: true},
        quantity: { type: Number },
    },
    { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
