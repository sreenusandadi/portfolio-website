const asyncHandler = require("express-async-handler");
const Course = require("../models/courseModel");

//@desc get all courses
//@route GET /api/courses
//@access public
const getCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find();
  if (!courses && courses.length === 0) {
    res.status(404);
    throw new Error("No Courese Found");
  }
  res.status(200).json(courses);
});

const addCourse = asyncHandler(async (req, res) => {
  const { title, id, content } = req.body;
  if (!title || !id || !content) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const course = await Course.create({ title, id, content });
  res.status(201).json(course);
});

const getCourse = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const course = await Course.findById(id);
  if (!course) {
    res.status(404);
    throw new Error("Course not found");
  }
  res.status(200).json(course);
});

const updateCourse = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const course = await Course.findById(id);
  console.log("course details:", course);
  if (!course) {
    res.status(404);
    throw new Error("Course not found");
  }
  const updatedCourse = await Course.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.status(201).json(updatedCourse);
});

const deleteCourse = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const course = await Course.findById(id);
  console.log("Course", course);
  if (!course) {
    res.status(404);
    throw new Error("Course not found");
  }
  const deletedCourse = await Course.deleteOne(course);
  res.status(200).json(course);
});

module.exports = {
  getCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse,
};
