import express, { Express, Request, Response } from 'express';
const mongoose = require('mongoose');
const app: Express = express();
const { studentRouter, teacherRouter } = require('./routes/index');
const auth = require('./middlewares/auth.middleware');
const time = require('./middlewares/time.middleware');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Namaste');
});

// Middlewares
app.use(auth);
app.use(time());

// Routes
app.use('/students', studentRouter);
app.use('/teachers', teacherRouter);

app.listen(8000, () => {
    console.log(`Listening on http://localhost:8000`);
});
