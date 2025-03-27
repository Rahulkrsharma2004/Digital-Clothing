const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");


const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json({ success: true, products });
});


const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json({ success: true, product });
  } else {
    res.status(404).json({ success: false, message: "Product not found" });
  }
});


const createProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, customizationOptions } = req.body;

  if (!name || !price || !description || !image) {
    return res.status(400).json({ success: false, message: "Name, price, description, and image are required" });
  }

  const product = new Product({
    name,
    price,
    description,
    image,
    customizationOptions: customizationOptions || [],
  });

  const createdProduct = await product.save();
  res.status(201).json({ success: true, product: createdProduct });
});


const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, customizationOptions } = req.body;

  const product = await Product.findById(req.params.id);
  if (product) {
    product.name = name || product.name;
    product.price = price || product.price;
    product.description = description || product.description;
    product.image = image || product.image;
    product.customizationOptions = customizationOptions || product.customizationOptions;

    const updatedProduct = await product.save();
    res.json({ success: true, product: updatedProduct });
  } else {
    res.status(404).json({ success: false, message: "Product not found" });
  }
});

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.deleteOne();
    res.json({ success: true, message: "Product Deleted Successfully" });
  } else {
    res.status(404).json({ success: false, message: "Product not found" });
  }
});

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
