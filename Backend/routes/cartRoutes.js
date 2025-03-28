const express = require("express");
const { getCart, addToCart,removeFromCart } = require("../controllers/cartController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getCart);
router.post("/add/:id", protect, addToCart);
router.delete("/delete/:id", protect, removeFromCart);

module.exports = router;
