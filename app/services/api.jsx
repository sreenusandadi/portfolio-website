const baseUrl = process.env.BASE_URL || "http://localhost:5000";

const getCourses = async () => {
  try {
    const res = await fetch(`${baseUrl}/api/courses`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const getProjects = async () => {
  try {
    const res = await fetch(`${baseUrl}/api/projects`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const getAchievements = async () => {
  try {
    const res = await fetch(`${baseUrl}/api/achievements`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export { getCourses, getProjects, getAchievements };
