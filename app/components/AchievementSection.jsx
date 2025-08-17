"use client";
import React, { useEffect, useState } from "react";
import { getAchievements } from "../services/api";
import dynamic from "next/dynamic";

const AnimatedNumbes = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

export default function AchievementSection() {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getAchievements();
      setAchievements(data);
    };
    getData();
  }, []);
  return achievements && achievements.length > 0 ? (
    <div className="flex flex-col sm:flex-row border-0 text-white items-center justify-between gap-16 py-6 px-6 sm:border border-[#33353F] rounded-lg mt-6">
      {achievements.map((achievement, index) => (
        <div key={index} className="">
          <h2 className="text-xl font-bold">
            {achievement.metric === "Projects" ? "~ " : ""}
            <AnimatedNumbes
              includeComma
              animateToNumber={parseInt(achievement.value)}
              locale="en-US"
              configs={(_, index) => {
                return {
                  mass: 1,
                  friction: 100,
                  tensions: 140 * (index + 1),
                };
              }}
            />
            {achievement.metric === "Users" ? " +" : ""}
            {achievement.metric === "Years" ? " +" : ""}
          </h2>
          <p className="text-base text-[#ADB7BE]">{achievement.metric}</p>
        </div>
      ))}
    </div>
  ) : null;
}
