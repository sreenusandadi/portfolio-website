const express = require("express");
const {
  getProjects,
  addProject,
  getProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");

const router = express.Router();

router.get("/", getProjects).post("/", addProject);

router
  .get("/:id", getProject)
  .post("/:id", updateProject)
  .delete("/:id", deleteProject);

module.exports = router;
