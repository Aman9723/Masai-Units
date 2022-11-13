const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
    {
        product: {
            type: mongoose.Schema.Types.ObjectId, //_id
            ref: 'product',
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
            min: 1,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Cart = mongoose.model('cart', cartSchema);

module.exports = Cart;
