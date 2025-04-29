import { About } from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
