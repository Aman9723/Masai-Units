const express = require('express');
const Cart = require('./cart.model');
const User = require('../user/user.model');
const Product = require('../product/product.model');
const app = express.Router();

const authMiddleware = async (req, res, next) => {
    let { token } = req.headers;
    if (!token) {
        res.send('Missing token');
    }
    let [email, password] = token.split('_#_');

    try {
        let user = await User.findOne({ email });
        if (user) {
            if (password === user.password) {
                req.userId = user.id;
                next();
            } else {
                res.status(401).send(
                    'Authentication Failure: incorrect Password'
                );
            }
        } else {
            res.status(404).send(`User with email: ${email} not found`);
        }
    } catch (e) {
        res.status(404).send(e.message);
    }
};

app.use(authMiddleware);

app.get('/', async (req, res) => {
    try {
        // populate({
        //     path: 'author',
        //     select: 'name email role',
        // });
        let carts = await Cart.find({ user: req.userId }).populate(['product']); // key product written in schema
        res.send(carts);
    } catch (e) {
        res.status(400).send(e.message);
    }
});

app.post('/', async (req, res) => {
    try {
        let product = await Product.findById(req.body.product);
        if (product.quantity > req.body.quantity) {
            let cart = await Cart.create({
                ...req.body,
                user: req.userId,
            });
            res.send(cart);
            await Product.findByIdAndUpdate(req.body.product, {
                quantity: product.quantity - cart.quantity,
            });
        } else {
            res.send(`Only ${product.quantity} amount left`);
        }
    } catch (e) {
        res.status(400).send(e.message);
    }
});

app.patch('/', async (req, res) => {
    try {
        let product = await Product.findById(req.body.product);
        if (product.quantity > req.body.quantity) {
            let cart = await Cart.findOneAndUpdate(
                { $and: [{ user: req.userId, product: req.body.product }] },
                { quantity: req.body.quantity }
            );
            await Product.findByIdAndUpdate(req.body.product, {
                quantity:
                    product.quantity + (cart.quantity - req.body.quantity),
            });
            res.send();
        } else {
            res.send(`Only ${product.quantity} amount left`);
        }
    } catch (e) {
        res.status(400).send(e.message);
    }
});

app.delete('/', async (req, res) => {
    try {
        let product = await Product.findById(req.body.product);
        let cart = await Cart.findOneAndDelete({
            $and: [{ user: req.userId, product: req.body.product }],
        });
        await Product.findByIdAndUpdate(req.body.product, {
            quantity: product.quantity + cart.quantity,
        });
        res.send();
    } catch (e) {
        res.status(400).send(e.message);
    }
});

module.exports = app;
