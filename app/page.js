import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import FooterSection from "./components/FooterSection";
import AchievementSection from "./components/AchievementSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] container mx-auto py-4">
      <Navbar />
      <div className="container mt-24 mx-auto px-4 md:px-12">
        <HeroSection />
        <AchievementSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <FooterSection />
    </main>
  );
}
