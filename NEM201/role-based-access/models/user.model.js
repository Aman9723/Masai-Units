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
        role: {
            type: String,
            enum: ['student', 'instructor', 'admin'],
            default: 'student',
        },
    },
    {
        versionKey: false,
    }
);

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;
