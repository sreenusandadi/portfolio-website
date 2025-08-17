const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add the course title"],
    },
    description: {
      type: String,
      required: [true, "Please add the course description"],
    },
    image: {
      type: String,
      required: [true, "Please add the course image"],
    },
    gitUrl: {
      type: String,
      required: [true, "Please add the course gitUrl"],
    },
    tag: {
      type: Array,
      required: [true, "Please add the course tag"],
    },
    previewUrl: {
      type: String,
      required: [true, "Please add the course previewUrl"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
