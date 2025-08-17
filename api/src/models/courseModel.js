const mongoose = require("mongoose");

const courseSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add the course title"],
    },
    id: {
      type: String,
      required: [true, "Please add the course id"],
    },
    content: {
      type: String,
      required: [true, "Please add the course Content"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);
