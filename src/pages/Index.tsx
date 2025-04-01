
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";
import Contact from "@/components/contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-portfolio-darker text-white font-poppins">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <Contact />
      <Footer />
      
    </div>
  );
};

export default Index;
