const asyncHandler = require("express-async-handler");
const Achievement = require("../models/achievementModel");

//@desc get all achievements
//@route GET /api/achievements
//@access public
const getAchievements = asyncHandler(async (req, res) => {
  const achievements = await Achievement.find();
  if (!achievements && achievements.length === 0) {
    res.status(404);
    throw new Error("No achievements Found");
  }
  res.status(200).json(achievements);
});

const addAchievement = asyncHandler(async (req, res) => {
  const { metric, value } = req.body;
  if (!metric || !value) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const achievement = await Achievement.create({ metric, value });
  res.status(201).json(achievement);
});

module.exports = {
  getAchievements,
  addAchievement,
};
