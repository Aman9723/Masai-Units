const express = require('express');
const db = require('../db.json');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send(db);
});

module.exports = app;
