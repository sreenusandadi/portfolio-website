const express = require("express");
const dotenv = require("dotenv").config();
const couresRoute = require("./src/routes/course-routes");
const projectRoutes = require("./src/routes/projectRoutes");
const achivementRoutes = require("./src/routes/achivementRoutes");
const errorHandler = require("./src/middleware/errorHandler");
const connectDb = require("./src/config/dbConnection");
const cors = require("cors");

const app = express();

const port = process.env.PORT || "3000";

connectDb();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());

app.use("/api/courses", couresRoute);
app.use("/api/projects", projectRoutes);
app.use("/api/achievements", achivementRoutes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
