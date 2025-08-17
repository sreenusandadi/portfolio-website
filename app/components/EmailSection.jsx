import React from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

export default function EmailSection() {
  return (
    <section className="grid md:grid-cols-2 py-12 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's connect</h5>
        <p className="text-white">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials flex gap-2">
          <Link href="github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <label
            htmlFor="email"
            className="text-white block text-sm font-medium mb-2"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2AE] text-gray-100 text-sm rounded-lg block w-full p-2"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="text-white block text-sm font-medium mb-2"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            placeholder="Just saying hi"
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2AE] text-gray-100 text-sm rounded-lg block w-full p-2"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="text-white block text-sm font-medium mb-2"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Let's talk about..."
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2AE] text-gray-100 text-sm rounded-lg block w-full p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-5 rounded-lg w-full"
        >
          Send Message
        </button>
      </div>
    </section>
  );
}
