import Image from "next/image";

// Component Imports
import { Hero } from '@/components/Hero';
import { AboutMe } from '@/components/AboutMe';
import { Projects } from '@/components/Projects';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />
    </>
  );
}
