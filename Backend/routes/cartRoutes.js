const express = require("express");
const { getCart, addToCart } = require("../controllers/cartController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getCart);
router.post("/add", protect, addToCart);

module.exports = router;
