const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    },
    secretQuestion: {
        type: String,
        required: true
    },
    secretAnswer: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    favorites: [{
        type: mongoose.Types.ObjectId,
        ref: 'Product'
    }],
    cart: [{
        type: mongoose.Types.ObjectId,
        ref: 'Product'
    }],
    history: [{
        type: mongoose.Types.ObjectId,
        ref: 'Purchase'
    }]
});

const User = mongoose.model('User', userSchema);
module.exports = User;