const asyncHandler = require("express-async-handler");
const Cart = require("../models/cartModel");
const Product = require("../models/productModel");

const getCart = asyncHandler(async (req, res) => {
  const cart = await Cart.findOne({ user: req.user?._id }).populate("items.product", "name description price image");
  if (!cart) {
    return res.json({ success: true, cart: { user: req.user?._id, items: [] } });
  }
  res.json({ success: true, cart });
});

const addToCart = asyncHandler(async (req, res) => {
  const { productId, quantity } = req.body;

  if (!productId || quantity < 1) {
    return res.status(400).json({ success: false, message: "Invalid product or quantity" });
  }

  const product = await Product.findById(productId);
  if (!product) {
    return res.status(404).json({ success: false, message: "Product not found" });
  }

  let cart = await Cart.findOne({ user: req.user._id });

  if (!cart) {
    cart = new Cart({
      user: req.user._id,
      items: [{ 
        product: productId, 
        name: product.name, 
        description: product.description, 
        price: product.price, 
        image: product.image, 
        quantity 
      }]
    });
  } else {
    const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ 
        product: productId, 
        name: product.name, 
        description: product.description, 
        price: product.price, 
        image: product.image, 
      });
    }
  }

  await cart.save();
  res.json({ success: true, cart });
});

module.exports = {
  getCart,
  addToCart
};
