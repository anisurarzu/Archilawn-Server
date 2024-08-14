const mongoose = require("mongoose");

const DetailsSchema = new mongoose.Schema({
  subDetails: {
    type: String,
    required: true,
  },
});

const PackageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  details: [DetailsSchema],
  price: {
    type: String,
    required: true,
  },
  discount: {
    type: String,
    required: true,
  },
});

const ServiceSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    package: [PackageSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Service", ServiceSchema);
