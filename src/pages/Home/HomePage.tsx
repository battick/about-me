import Hero from "./sections/HeroSection";
import About from "./sections/AboutSection";
import Projects from "./sections/ProjectsSection";
import Capabilities from "./sections/CapabilitiesSection";
import Contact from "./sections/ContactSection";
export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Capabilities />
      <Contact />
    </>
  );
}
