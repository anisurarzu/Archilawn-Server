const Order = require("../models/Order");

// @desc Create a new order
// @route POST /api/orders
const createOrder = async (req, res) => {
  const {
    designType,
    images,
    sideYard,
    lighting,
    totalPrice,
    orderBy,
    status,
  } = req.body;

  try {
    const order = await Order.create({
      designType,
      images,
      sideYard,
      lighting,
      totalPrice,
      orderBy,
      status: status || "pending", // Default status is "pending"
      createTime: Date.now(), // Automatically sets the current time
    });
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc Get all orders
// @route GET /api/orders
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @desc Get a single order by ID
// @route GET /api/orders/:id
const getOrderById = async (req, res) => {
  const { id } = req.params;

  try {
    const order = await Order.findById(id);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @desc Update an order
// @route PUT /api/orders/:id
const updateOrder = async (req, res) => {
  const { id } = req.params;

  try {
    const order = await Order.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @desc Delete an order
// @route DELETE /api/orders/:id
const deleteOrder = async (req, res) => {
  const { id } = req.params;

  try {
    const order = await Order.findByIdAndDelete(id);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
};
