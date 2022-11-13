const express = require('express');
const cors = require('cors');
const db = require('./db.json');
const userRouter = require('./router/user.router');
const productsRouter = require('./router/products.router');
const compression = require('compression');
const multer = require('multer');

const logger = (req, res, next) => {
  console.log('Before1');
  next();
  console.log('After1');
};

const logger2 = (req, res, next) => {
  console.log('Before2');
  next();
  console.log('After2');
};

const app = express();

app.use(express.json());
app.use(compression());
app.use(cors());
app.use(logger); // global middleware
app.use('/users', userRouter);
app.use('/products', productsRouter);

app.post('/', (req, res) => {
  res.send('post working');
});

// local middleware
app.get('/', logger2, (req, res) => {
  res.send('get working');
});

app.delete('/', (req, res) => {
  res.send('delete working');
});

app.listen(8000, (req, res) => {
  console.log('Listening on http://localhost:8000');
});
