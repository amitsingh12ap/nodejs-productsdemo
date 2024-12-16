const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./source/routes/product.routes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/products', productRoutes);

module.exports = app;
