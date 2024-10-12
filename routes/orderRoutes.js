const express = require("express");
const {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/orders", protect, createOrder); // Create a new order
router.get("/orders", protect, getOrders); // Get all orders
router.get("/orders/:id", protect, getOrderById); // Get an order by ID
router.put("/orders/:id", protect, updateOrder); // Update an order by ID
router.delete("/orders/:id", protect, deleteOrder); // Delete an order by ID

module.exports = router;
