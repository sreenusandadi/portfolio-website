const asyncHandler = require("express-async-handler");
const Project = require("../models/projectModel");

//@desc get all projects
//@route GET /api/projects
//@access public
const getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find();
  if (!projects && projects.length === 0) {
    res.status(404);
    throw new Error("No Projects Found");
  }
  res.status(200).json(projects);
});

const addProject = asyncHandler(async (req, res) => {
  const { title, description, image, tag, gitUrl, previewUrl } = req.body;
  if (!title || !description || !image || !tag || !gitUrl || !previewUrl) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const course = await Project.create({
    title,
    description,
    image,
    tag,
    gitUrl,
    previewUrl,
  });
  res.status(201).json(course);
});

const getProject = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const project = await Project.findById(id);
  if (!project) {
    res.status(404);
    throw new Error("Project not found");
  }
  res.status(200).json(project);
});

const updateProject = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const project = await Project.findById(id);
  if (!project) {
    res.status(404);
    throw new Error("Project not found");
  }
  const updatedProject = await Project.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.status(201).json(updateProject);
});

const deleteProject = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const project = await Project.findById(id);
  if (!project) {
    res.status(404);
    throw new Error("Project not found");
  }
  await Project.deleteOne(course);
  res.status(200).json(Project);
});

module.exports = {
  getProjects,
  getProject,
  addProject,
  updateProject,
  deleteProject,
};
