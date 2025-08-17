"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { getProjects } from "../services/api";

export default function ProjectSection() {
  const [projects, setProjects] = useState([]);
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  useEffect(() => {
    const getData = async () => {
      const projectsList = await getProjects();
      console.log(projectsList);
      setProjects(projectsList);
    };
    getData();
  }, []);

  const filterdTags = projects?.filter((project) => project.tag.includes(tag));
  return (
    <>
      <h1 className="text-center text-4xl font-bold text-white mt-4">
        My Projects
      </h1>
      <div className="text-white flex items-center justify-center gap-2 py-6">
        <ProjectTag
          name="All"
          isSelected={tag === "All"}
          onClick={handleTagChange}
        />
        <ProjectTag
          name="Web"
          isSelected={tag === "Web"}
          onClick={handleTagChange}
        />
        <ProjectTag
          name="Mobile"
          isSelected={tag === "Mobile"}
          onClick={handleTagChange}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filterdTags &&
          filterdTags.map((project) => (
            <ProjectCard
              key={project._id}
              title={project.title}
              description={project.description}
              imageUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          ))}
      </div>
    </>
  );
}
