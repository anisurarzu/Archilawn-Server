const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  designType: {
    type: String,
    required: true,
  },
  images: {
    type: Boolean,
    required: true,
  },
  sideYard: {
    type: Boolean,
    required: true,
  },
  lighting: {
    type: Boolean,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  orderBy: {
    type: String,
    required: true, // Can be user ID or email, etc.
  },
  status: {
    type: String,
    default: "pending", // Possible values: 'pending', 'completed', 'cancelled', etc.
  },
  createTime: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
