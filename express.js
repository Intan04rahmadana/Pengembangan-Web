
const express = require('express');

const app = express();

// Middleware untuk membaca JSON
app.use(express.json());

module.exports = app;