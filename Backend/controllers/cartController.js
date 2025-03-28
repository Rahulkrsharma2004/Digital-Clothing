const Cart = require("../models/cartModel.js");
const Product = require("../models/productModel.js");

const addToCart = async (req, res) => {
  try {
    const  productId  = req.params.id;
    const userId = req.user.id;

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    let cart = await Cart.findOne({ userId, productId });
    
    if (!cart) {
      cart = new Cart({ userId, productId });
      await cart.save();
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getCart = async (req, res) => {
  try {
    // const userId = req.users.id;
    // console.log(userId)
    const cartItems = await Cart.find();
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const removeFromCart = async (req, res) => {
  try {
    const {productId}  = req.params;
    console.log(productId);
    const userId = req.user.id;

    const cart = await Cart.findOneAndDelete({ userId, productId });
    if (!cart) return res.status(404).json({ message: "Cart item not found" });

    res.status(200).json({ message: "Item removed from cart" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  addToCart,
  getCart,
  removeFromCart
};
