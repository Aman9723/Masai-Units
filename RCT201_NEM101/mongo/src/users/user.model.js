const mongoose = require('mongoose');

// schema - information about structure of data
const userSchema = new mongoose.Schema(
    {
        id: Number,
        name: { type: String, required: true },
        lname: String,
        email: String,
        gender: { type: String, required: true, enum: ['Male', 'Female'] },
        age: { type: Number, required: true, min: 20, max: 60 },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

// model - instance of the collection
const Users = mongoose.model('user', userSchema);

module.exports = Users;
