import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Navbar } from "@/components/layout/Navbar";
import { PageTransition } from "@/components/layout/PageTransition";
import { HeroSceneClient } from "@/components/three/HeroSceneClient";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <PageTransition>
      <main className="relative min-h-screen overflow-x-hidden bg-background text-slate-100">
        <HeroSceneClient />
        <Navbar />
        <div className="relative z-10 space-y-24 md:space-y-32">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <TimelineSection />
          <ContactSection />
        </div>
        <Footer />
      </main>
    </PageTransition>
  );
}

