const express = require('express');
const router = express.Router();
const {Product, ValidateProduct} = require('../models/Product');

router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', async (req, res) => {
    const validateBody = ValidateProduct(req.body);

    if (validateBody.error) {
        return res.status(400).send(validateBody.error.details[0].message);
    }

    let product = await Product.findOne({ name: req.body.name });
    if (product) {
        return res.status(400).send('Product already exists');
    }

    product = new Product({...req.body});

    try {
        const savedProduct = await product.save();
        res.json(savedProduct);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;