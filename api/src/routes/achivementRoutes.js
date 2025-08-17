const express = require("express");
const {
  getAchievements,
  addAchievement,
} = require("../controllers/achievementController");

const router = express.Router();

router.get("/", getAchievements).post("/", addAchievement);

module.exports = router;
