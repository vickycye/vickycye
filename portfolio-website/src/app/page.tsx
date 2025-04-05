import Image from "next/image";

// Component Imports
import { Hero } from '@/components/Hero';
import { AboutMe } from '@/components/AboutMe';
import { Projects } from '@/components/Projects';
import { InspirationalQuote } from '@/components/InspirationalQuote';
// import { Quote } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />
      <InspirationalQuote />
    </>
  );
}
