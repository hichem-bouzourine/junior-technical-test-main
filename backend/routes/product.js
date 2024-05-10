const express = require('express');
const router = express.Router();
const {Product, ValidateProduct} = require('../models/Product');

// GET : Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        if (!products) {
            return res.status(404).send('No products found');
        }
        res.json(products);
    } catch (err) {
        // send a response with a message and a status 
        res.status(500).send({ message: "internal error" });
    }
});

// GET : Get a specific product
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.send(product);
    } catch (err) {
        res.status(500).send({ message: "internal error" });
    }
});

// POST : Add a new product
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
        if (!savedProduct) {
            return res.status(500).send('Product could not be saved');
        }
        res.json(savedProduct);
    } catch (err) {
        res.status(500).send({ message: "internal error" });
    }
});

// PUT : Modify a product
router.put('/:id', async (req, res) => {
    const validateBody = ValidateProduct(req.body);
    if (validateBody.error) {
        return res.status(400).send(validateBody.error.details[0].message);
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).send('Product not found');
        }
        res.json(updatedProduct);
    } catch (err) {
        res.json({ message: err });
    }
});

// DELETE : Delete a product
router.delete('/:id', async (req, res) => {
    try {
        const removedProduct = await Product.findByIdAndRemove(req.params.id);
        if (!removedProduct) {
            return res.status(404).send('Product not found');
        }
        res.json(removedProduct);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;