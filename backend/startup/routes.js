const express = require('express');
const productRouter = require('../routes/product');

module.exports = function (app) {
    app.use(express.json()); // Middleware to parse incoming requests with JSON payloads

    app.use('/api/products', productRouter); // Use the product router for any routes starting with /products

}
