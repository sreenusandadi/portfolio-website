"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-5">
        <li>Next JS</li>
        <li>React JS</li>
        <li>Node JS</li>
        <li>Mongo DB</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-5">
        <li>Masters in Frontend Development</li>
        <li>Implemented wesites with MERN stack</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-5">
        <li>Excellance awards on Udemy Node JS test</li>
        <li>Best employee of the quarter</li>
      </ul>
    ),
  },
];

export default function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handletabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          alt="about image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About me</h2>
          <p className="text-base md:text-lg">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout It is a
            long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout
          </p>
          <div className="flex mt-8 gap-3">
            {TAB_DATA.map((tabItem, index) => (
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
          <ul className="mt-5">
            <li>{TAB_DATA.find((item) => item.id === tab).content}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
