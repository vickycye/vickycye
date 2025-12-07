'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export const AboutMe = () => {
  const aboutMeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = aboutMeRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, []);

  return (
    <div id="about" className="relative bg-[var(--dark-black)] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative pb-8 bg-[var(--dark-black)] sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg 
            className="z-10 hidden lg:block absolute -right-20 inset-y-0 h-full w-48 text-[var(--light-orange-10)] transform translate-x-1/2"
            fill="currentColor" 
            viewBox="0 0 100 100" 
            preserveAspectRatio="none" 
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100"></polygon>
          </svg>
          <div className="pt-1"></div>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div id="about-me" ref={aboutMeRef} className="opacity-0 transition-opacity duration-1000 sm:text-center lg:text-left">
              <h2 className="my-6 text-2xl tracking-tight font-extrabold text-[var(--cream)] sm:text-3xl md:text-4xl">
                About me
              </h2>
              <p className="text-[var(--cream)]">
                Hi! I am an undergraduate student studying <span className="font-bold text-[var(--solid-orange-10)]">Computer Science</span> at 
                the <span className="font-bold text-[var(--mauve)]">University of Washington&apos;s Paul Allen School for CSE</span>, 
                passionately pursuing a career in computer vision and artificial intelligence, with a focus on <span className="font-bold text-[var(--light-orange-10)]">image/video/3D generation</span>. 
                I am dedicated to contributing to the rapidly evolving field of generative AI, driven by how the breakthroughs of 2020 reshaped not only the way I work but also 
                how I think. Seeing AI enable ideas to be explored 10x faster made me intensely curious about how these systems function and how to make them safer, 
                more reliable, and more aligned with human values and needs. 
                <br></br>
                <br></br>
                I&apos;m currently the most curious about <span className="font-bold text-[var(--light-orange-10)]">vision-language models, image editing, fine-tuning foundation models</span>, and <span className="font-bold text-[var(--light-orange-10)]">model evaluation</span>. 
                As I continue exploring this space, my goal is to help shape AI systems that empower people by being trustworthy, intuitive, and creative. I&apos;m excited to 
                keep pushing the boundaries of what these models can do while contributing to a future where AI is a force for good.
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-[42.4%]">
        <Image 
          className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full" 
          src="/images/about_me.jpg" 
          alt="about me"
          width={600}
          height={400}
        />
      </div>
    </div>
  );
};