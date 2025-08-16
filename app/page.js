import Image from "next/image";
import HearSection from "./components/HearSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <main className="min-w-screen min-h-screen bg-[#121212] container mx-auto px-12 py-4">
      <Navbar />
      <div className="container mt-24 mx-auto">
        <HearSection />
        <AboutSection />
        <ProjectSection />
      </div>
    </main>
  );
}
