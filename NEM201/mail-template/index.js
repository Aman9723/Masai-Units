const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/user.model');
const jwt = require('jsonwebtoken');
const sendMail = require('./mail');

// to capture the blacklisted emails 
const blackList = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/signup', async (req, res) => {
    const { name, email, password, age } = req.body;
    const user = new UserModel({ name, email, password, age });
    await user.save();
    await sendMail(email, name);
    res.status(201).send('User created successfully');
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email, password });
    if (user) {
        //generate token
        const token = jwt.sign(
            {
                id: user._id,
                name: user.name,
                age: user.age,
            },
            'SECRET1234',
            {
                expiresIn: '5 mins',
            }
        );
        // generate refresh token
        const refreshToken = jwt.sign(
            {
                id: user._id,
                name: user.name,
                age: user.age,
            },
            'REFRESHSECRET',
            {
                expiresIn: '7 days',
            }
        );
        return res.send({ message: 'Login Success', token, refreshToken });
    }
    return res.status(401).send('Invalid credentials');
});

app.post('/refresh', async (req, res) => {
    const refreshToken = req.headers['authorization'];
    if (!refreshToken) {
        return res.status(401).send('unathorized');
    }
    try {
        const verification = jwt.verify(refreshToken, 'REFRESHSECRET');
        // 1. store info in primary token then retrieve
        // 2. with the help of id, get data from db
        if (verification) {
            const newToken = jwt.sign(
                {
                    id: verification.id,
                    name: verification.name,
                    age: verification.age,
                },
                'SECRET1234',
                {
                    expiresIn: '5 mins',
                }
            );
            return res.send({ token: newToken });
        }
    } catch (e) {
        // refresh token is jwt.TokenExpiredError, redirect user to login on frontend
        res.send('refresh token expired');
    }
});

app.get('/user/:id', async (req, res) => {
    const { id } = req.params;
    const token = req.headers['authorization'];
    if (!token) {
        return res.send('Unauthorized');
    }
    // if token already expired
    if (blackList.includes(token)) {
        return res.send('token already expired');
    }
    try {
        // gives error on wrong token
        const verification = jwt.verify(token, 'SECRET1234');
        if (verification) {
            const user = await UserModel.findOne({ _id: id });
            return res.send(user);
        }
    } catch (e) {
        // put already expired token in blacklist
        if (e.message === 'jwt expired') {
            blackList.push(token);
        }
        return res.send('Invalid token');
    }
});

app.post('/logout', async (req, res) => {
    const token = req.headers['authorization'];
    blackList.push(token);
    return res.send('User logged out successfully');
});

app.get('/', (req, res) => res.send('hello'));

mongoose.connect('mongodb://127.0.0.1:27017/b21').then(() => {
    app.listen(8000, () => {
        console.log('Listening on port 8000 ...');
    });
});
