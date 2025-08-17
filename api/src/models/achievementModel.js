const mongoose = require("mongoose");

const achievementSchema = mongoose.Schema(
  {
    metric: {
      type: String,
      required: [true, "Please add the course title"],
    },
    value: {
      type: String,
      required: [true, "Please add the course id"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Achievement", achievementSchema);
