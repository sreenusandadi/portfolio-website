"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState, useTransition } from "react";
import TabButton from "./TabButton";
import { getCourses } from "../services/api";

export default function AboutSection() {
  const [skills, setSkills] = useState([]);
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const getData = async () => {
      const courses = await getCourses();
      console.log(courses);
      setSkills(courses);
    };
    getData();
  }, []);

  const handletabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const useSanitizedHtml = (htmlString) => {
    return DOMPurify.sanitize(htmlString);
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          alt="about image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About me</h2>
          <p className="text-base md:text-lg text-justify">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout It is a
            long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout
          </p>
          <div className="flex mt-8 gap-3">
            {skills &&
              skills.map((tabItem, index) => (
                <div key={index}>
                  <TabButton
                    key={index}
                    selectTab={() => handletabChange(tabItem.id)}
                    active={tab === tabItem.id}
                  >
                    {tabItem.title}
                  </TabButton>
                </div>
              ))}
          </div>
          {skills && skills.length > 0 ? (
            <ul className="mt-5">
              {
                <div
                  dangerouslySetInnerHTML={{
                    __html: skills?.find((item) => item.id === tab)?.content,
                  }}
                ></div>
              }
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}
