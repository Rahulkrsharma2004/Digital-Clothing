const Cart = require("../models/cartModel.js");
const Product = require("../models/productModel.js");

const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user.id; 

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [{ productId, quantity }] });
    } else {
      const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);

      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity; 
      } else {
        cart.items.push({ productId, quantity });
      }
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const cart = await Cart.findOne({ userId }).populate("items.productId");

    if (!cart) return res.status(200).json({ items: [] });

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const removeFromCart = async (req, res) => {
  try {
    const { productId } = req.params;
    const userId = req.user.id;

    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.items = cart.items.filter(item => item.productId.toString() !== productId);

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  addToCart,
  getCart,
  removeFromCart
};
