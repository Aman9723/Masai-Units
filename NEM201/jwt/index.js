const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/user.model');
const jwt = require('jsonwebtoken');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/signup', async (req, res) => {
    const { name, email, password, age } = req.body;
    const user = new UserModel({ name, email, password, age });
    await user.save();
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
            'SECRET1234'
        );
        return res.send({ message: 'Login Success', token });
    }
    return res.status(401).send('Invalid credentials');
});

app.get('/user/:id', async (req, res) => {
    const { id } = req.params;
    const token = req.headers['authorization'];
    if (!token) {
        return res.send('Unauthorized');
    }
    try {
        // gives error on wrong token
        const verification = jwt.verify(token, 'SECRET1234');
        if (verification) {
            const user = await UserModel.findOne({ _id: id });
            return res.send(user);
        }
    } catch {
        return res.send('Invalid token');
    }
});

app.get('/', (req, res) => res.send('hello'));

mongoose.connect('mongodb://127.0.0.1:27017/b21').then(() => {
    app.listen(8000, () => {
        console.log('Listening on port 8000 ...');
    });
});
