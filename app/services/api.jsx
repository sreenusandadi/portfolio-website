import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

const getCourses = async () => {
  try {
    const res = await api.get("/api/courses");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getProjects = async () => {
  try {
    const res = await api.get("/api/projects");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { getCourses, getProjects };
