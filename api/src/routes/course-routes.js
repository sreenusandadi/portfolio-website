const express = require("express");
const {
  getCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/course-controller");

const router = express.Router();

router.get("/", getCourses).post("/", addCourse);

router
  .get("/:id", getCourse)
  .post("/:id", updateCourse)
  .delete("/:id", deleteCourse);

module.exports = router;
