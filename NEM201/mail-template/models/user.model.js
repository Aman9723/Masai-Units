const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        name: String,
        email: {
            type: String,
            unique: true,
        },
        password: String,
        age: Number,
        location: String,
        gender: String,
        dob: Date,
    },
    {
        versionKey: false,
    }
);

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;
