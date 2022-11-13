const express = require('express');
const Users = require('./user.model');

const app = express.Router();

app.get('/', async (req, res) => {
    let users = await Users.find();
    res.send(users);
});

app.get('/:id', async (req, res) => {
    let id = req.params.id;
    try {
        let user = await Users.findById(id);
        if (!user) {
            res.send('User not found');
        } else {
            res.send(user);
        }
    } catch (e) {
        res.send(e.message);
    }
});

// POST
app.post('/', async (req, res) => {
    try {
        let user = await Users.create({
            ...req.body,
        });
        res.send(user);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

// DELETE
app.delete('/:id', async (req, res) => {
    let id = req.params.id;
    try {
        let user = await Users.findByIdAndDelete(id);
        if (user) {
            res.send('User deleted successfully');
        } else {
            res.send('Cannot delete non existing user');
        }
    } catch (e) {
        res.status(404).send(e.message);
    }
});

// PATCH
app.patch('/:id', async (req, res) => {
    let id = req.params.id;
    try {
        let user = await Users.findByIdAndUpdate(
            id,
            { ...req.body },
            { new: true }
        );
        res.send(user);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

module.exports = app;
