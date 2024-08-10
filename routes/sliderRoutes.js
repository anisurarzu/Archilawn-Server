const express = require("express");
const {
  createSlider,
  getSliders,
  updateSlider,
  deleteSlider,
} = require("../controllers/sliderController");

const router = express.Router();

// Define the routes
router.post("/sliders", createSlider);
router.get("/sliders", getSliders);
router.put("/sliders/:id", updateSlider);
router.delete("/sliders/:id", deleteSlider);

module.exports = router;
