import { About } from "@/components/sections/about";
import { Hero } from "@/components/sections/hero";
import Skills from "@/components/sections/skills";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <About />
      <Skills />
    </div>
  );
}
