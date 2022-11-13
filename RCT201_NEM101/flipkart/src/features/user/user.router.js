const express = require('express');
const User = require('./user.model');
const app = express.Router();

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            if (password === user.password) {
                res.send({
                    token: `${user.email}_#_${user.password}`,
                });
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
});

app.post('/signup', async (req, res) => {
    // req.body also contains password, name, age
    const { email, password } = req.body;

    try {
        let existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(404).send('Cannot create an user with existing email');
        } else {
            let user = await User.create({
                ...req.body,
            });
            res.send({
                token: `${user.email}_#_${user.password}`,
            });
        }
    } catch (e) {
        res.status(404).send(e.message);
    }
});

module.exports = app;
