const mongoose = require("mongoose");
const Joi = require("joi");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);

function validateProduct(product) {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    imageUrl: Joi.string().required()
  });

  return schema.validate(product);
}

function validateProductUpdate(product) {
  const schema = Joi.object({
    name: Joi.string(),
    description: Joi.string(),
    price: Joi.number(),
    imageUrl: Joi.string()
  });

  return schema.validate(product);
}

exports.Product = Product;
exports.ValidateProduct = validateProduct;
exports.ValidateProductUpdate = validateProductUpdate;
