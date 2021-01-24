const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        min: 100,
        required: true
    },
    promotion: {
        type: Boolean,
        default: false
    },
    newPrice: {
        type: Number,
        min: 100
    },
    mainPicture: {
        type: Buffer,//TODO: fix this
        required: true
    },
    pictures: [{
        type: Buffer//TODO: fix this
    }],
    categories: [{
        type: String
    }],
    tags: [{
        type: String
    }]
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;