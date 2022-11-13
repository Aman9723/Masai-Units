require('dotenv').config();
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT;
const connect = require('./config/db');

const userRoute = require('./users/user.route');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/users', userRoute);

app.listen(PORT, async () => {
    try {
        await connect();
    } catch (e) {
        console.log(e);
    }
    console.log(`Listening at http://localhost:${PORT}`);
});
