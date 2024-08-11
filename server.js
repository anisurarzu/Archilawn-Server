const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const sliderRoutes = require("./routes/sliderRoutes"); // Import slider routes
require("dotenv").config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Auth Routes
app.use("/api/auth", authRoutes);

// Slider Routes
app.use("/api", sliderRoutes); // Add slider routes under /api

// Root Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
